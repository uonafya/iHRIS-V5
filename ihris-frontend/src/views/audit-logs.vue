<template>
  <v-container class="mt-4">
    <v-card elevation="1">
      <v-card-title class="primary darken-1 white--text font-weight-bold justify-center">
        <v-icon class="mr-2" color="white">mdi-database-export-outline</v-icon>
        {{ $t('App.hardcoded-texts.Audit Logs') }}
      </v-card-title>
      <v-card-title class="pa-8">
        <v-layout row wrap>
          <v-row>
            <v-col>
              <v-autocomplete
                  v-model="actionSubType"
                  :items="auditEventSubType"
                  :label="$t(`App.hardcoded-texts.Action Type`)"
                  clearable
                  dense
                  item-text="display"
                  item-value="code"
                  multiple
                  outlined
              ></v-autocomplete>
            </v-col>
            <v-col>
              <v-text-field
                  v-model="userEmail"
                  :label="$t(`App.hardcoded-texts.User Email`)"
                  dense
                  outlined
              />
            </v-col>
            <v-col>
              <v-menu
                  v-model="startDateMenu"
                  :close-on-content-click="false"
                  max-width="290px"
                  min-width="290px"
                  offset-y
                  transition="scale-transition"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                      v-model="startDate"
                      :label="$t(`App.hardcoded-texts.Start From`)"
                      dense
                      outlined
                      persistent-hint
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                    v-model="startDate"
                    :max="maxDate"
                    no-title
                    @input="startDateMenu = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col>
              <v-menu
                  v-model="endDateMenu"
                  :close-on-content-click="false"
                  max-width="290px"
                  min-width="290px"
                  offset-y
                  transition="scale-transition"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                      v-model="dateTo"
                      :label="$t(`App.hardcoded-texts.To`)"
                      dense
                      outlined
                      persistent-hint
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                    v-model="dateTo"
                    :max="maxDate"
                    no-title
                    @input="endDateMenu = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col>
              <v-autocomplete
                  v-model="operationOutcome"
                  :items="auditEventOutcome"
                  :label="$t(`App.hardcoded-texts.Operation Outcome`)"
                  clearable
                  dense
                  item-text="display"
                  item-value="code"
                  multiple
                  outlined
              ></v-autocomplete>
            </v-col>
          </v-row>
        </v-layout>
      </v-card-title>
      <v-divider class="my-2"></v-divider>
      <v-card-subtitle v-if="error_message" class="white--text error"
      >{{ error_message }}
      </v-card-subtitle>
      <v-card-text>
        <v-card-text>
          <v-data-table
              :footer-props="{ 'items-per-page-options': itemsPerPage }"
              :headers="auditLogHeader"
              :items="auditData"
              :loading="loading"
              :options.sync="options"
              :server-items-length="total"
              class="elevation-1 mt-3"
              item-key="id"
              style="cursor: pointer"
          >
            <template v-slot:item.actions="{ item }">
              <v-btn v-if="item.resource"
                     class="ma-1"
                     color="primary"
                     outlined x-small
                     @click="openPage(item)"
              >
                {{ $t(`App.hardcoded-texts.View Record`) }}
              </v-btn>
              <v-btn v-if="item.userId"
                     class="ma-1"
                     color="primary"
                     outlined
                     x-small
                     @click="openUser(item)"
              >
                {{ $t(`App.hardcoded-texts.View User`) }}
              </v-btn>
              <v-btn
                  v-if="item.resource&&item.resource.includes('_history')"
                  class="ma-1"
                  color="primary"
                  outlined
                  x-small
                  @click="viewDifference(item)"
              >
                {{ $t(`App.hardcoded-texts.View Changes`) }}
              </v-btn>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card-text>
      <v-dialog
          v-model="compareDialog"
          width="60%"
      >
        <v-card>
          <v-card-title class="text-h5 grey lighten-2 justify-center">
            {{ $t(`App.hardcoded-texts.Compare Changes`) }}
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="6">
                <b>Before Updates</b>
                <fhir-page-view v-if="compareDialog" :id="resourceId" :version="version-1" :page="pageId" @templates-loaded="displaySecond = true" />
              </v-col>
              <v-col v-if="displaySecond" cols="6">
                <b>After Updates</b>
                <fhir-page-view :id="resourceId" :version="version" :page="pageId" />
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="primary"
                text
                @click="compareDialog = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: 'audit-log',
  created() {
    this.setUp()
    this.getData(true);
    this.fetchAuditEventSubType()
  },
  components: {
    "fhir-page-view": () => import("@/views/fhir-page-view")
  },
  data: function () {
    return {
      displaySecond: false,
      auditData: [],
      id: null,
      userEmail: null,
      operationOutcome: null,
      total: 0,
      prevPage: -1,
      link: [],
      startDate: null,
      dateTo: null,
      startDateMenu: false,
      auditEventSubType: [],
      endDateMenu: false,
      error_message: null,
      options: {itemsPerPage: 10},
      loading: false,
      resource: 'AuditEvent',
      actionSubType: null,
      profile: 'http://ihris.org/fhir/StructureDefinition/ihris-auditevent',
      compareDialog: false,
      resourcePage: {},
      differnce: undefined,
      version: 0,
      resourceId: 0,
      pageId: ""
    }
  },
  methods: {
    setUp() {
      let url = "/fhir/Basic?_count=200&_format=json&_pretty=true&_profile=http://ihris.org/fhir/StructureDefinition/ihris-page"
      fetch(url).then(response => {
        response.json().then((data) => {
          data.entry.map((entry) => {
            let id = entry.resource.extension.find(y => y.url === "http://ihris.org/fhir/StructureDefinition/ihris-page-display").extension.find(x => x.url === "resource").valueReference.reference
            let page = entry.resource.id.split("ihris-page-").pop()
            this.resourcePage[id] = page
          })
        })
      })
    },
    getData(restart) {
      this.loading = true
      let url = "";
      if (restart) this.options.page = 1;
      if (this.options.page > 1) {
        if (this.options.page === this.prevPage - 1) {
          url = this.link.find(link => link.relation === "previous").url;
        } else if (this.options.page === this.prevPage + 1) {
          url = this.link.find(link => link.relation === "next").url;
        }
        url = url.replace("/fhir?", "/fhir/" + this.resource + "?")
        url = url.substring(url.indexOf("/fhir/"));
        //some of the hapi instances requires _total=accurate to always be available for them to return total resources
        if (url.indexOf('_total=accurate') === -1) {
          url = url + '&_total=accurate'
        }
        //add profile to url
        if (this.profile) {
          url = url + '&_profile=' + this.profile
        }
      }
      if (url === "") {
        let count = this.options.itemsPerPage || 10;
        let sort = "";
        for (let idx in this.options.sortBy) {
          if (sort) {
            sort += ",";
          }
          if (this.options.sortDesc[idx]) {
            sort += "-";
          }
          sort += this.options.sortBy[idx];
        }
        url =
            "/fhir/" +
            this.resource +
            "?_count=" +
            count +
            "&_elements=id,agent,subtype,entity,outcome,recorded" +
            "&_total=accurate&_profile=" +
            this.profile +
            "&_sort=-_lastUpdated";
      }
      if (this.id) {
        url = url + `&_id=${this.id}`
      }
      if (this.startDate) {
        url = url + `&date=ge${this.startDate}`
      }
      if (this.dateTo) {
        url = url + `&date=le${this.dateTo}`
      }
      if (this.actionSubType) {
        url = url + `&subtype=${this.actionSubType}`
      }
      if (this.userEmail) {
        url = url + `&altid:contains=${this.userEmail}`
      }
      if (this.operationOutcome) {
        url = url + `&outcome=${this.operationOutcome}`
      }
      this.prevPage = this.options.page;
      fetch(url).then(response => {
        response.json().then((data) => {
          this.link = data.link;
          this.total = data.total;
          this.auditData = []
          if (data.total > 0) {
            data.entry.map((entry) => {
              let resource = entry.resource.entity?.[0]?.what?.reference
              let auditData = {
                id: entry.resource.id,
                userId: entry.resource.agent[0]?.id,
                userEmail: entry.resource.agent[0]?.altId,
                action: entry.resource.subtype[0]?.display,
                fullName: entry.resource.agent[0]?.name,
                outcome: this.auditEventOutcome.find(x => x.code === entry.resource.outcome)?.display,
                recorded: entry.resource.recorded,
                resource: resource
              }
              if(resource && resource.startsWith("QuestionnaireResponse")){
                let url = "/fhir/QuestionnaireResponse/" + resource.split("/")?.[1]
                fetch(url).then(response => {
                  response.json().then((data) => {
                    let resourceTag = data.meta.tag.find((tag) => {
                      return tag.system === "http://ihris.org/fhir/tags/resource"
                    })
                    if(data.subject && data.subject.reference) {
                      auditData.resource = data.subject?.reference
                    } else if(resourceTag && resourceTag.code) {
                      auditData.resource = resourceTag.code
                    }
                  })
                }).catch(error => {
                  this.error_message = error.message
                })
              }
              if (auditData.userEmail) {
                let userUrl = `/fhir/Person?email=${auditData.userEmail}`
                fetch(userUrl).then(response => {
                  response.json().then((data) => {
                    auditData.userId = data.entry[0].resource.id
                  })
                }).catch(error => {
                  this.error_message = error.message
                })
              }
              this.auditData.push(auditData)
            })
          }
          this.loading = false
        })
            .catch(error => {
              this.loading = false
              this.error_message = error.message
            })
      })
    },
    fetchAuditEventSubType() {
      fetch("/fhir/ValueSet/audit-event-sub-type/$expand").then(response => {
        response.json().then((data) => {
          if(data.expansion && data.expansion.contains) {
            this.auditEventSubType = data.expansion.contains
          }
        })
      })
    },
    openUser(item) {
      if (item?.userId) {
        const routeData = this.$router.resolve({
          name: "resource_view",
          params: {page: "user", id: item.userId}
        });
        window.open(routeData.href, '_blank');
      }
    },
    openPage(item) {
      if (item?.resource) {
        let split = item.resource.split("/")
        let url = `/fhir/${split[0]}/${split[1]}`
        fetch(url).then(response => {
          response.json().then((data) => {
            let profile = data.meta.profile[0].split("http://ihris.org/fhir/").pop()
            const routeData = this.$router.resolve({
              name: "resource_view",
              params: {page: this.resourcePage[profile], id: split[1]}
            });
            window.open(routeData.href, '_blank');
          })
        })
      }
    },
    viewDifference(item) {
      this.displaySecond = false
      let input = item.resource.split("/");
      this.version = input[3]
      this.resourceId = input[1]
      let url = `/fhir/${input[0]}/${input[1]}`
      fetch(url).then(response => {
        response.json().then((data) => {
          let profile = data.meta.profile[0].split("http://ihris.org/fhir/").pop()
          this.pageId = this.resourcePage[profile]
          this.compareDialog = true
        })
      })
    }
  },
  computed: {
    maxDate() {
      return this.$moment().format("YYYY-MM-DD")
    },
    itemsPerPage() {
      return [5, 10, 50, 100];
    },
    auditLogHeader() {
      let headers = [{
        text: this.$t(`App.hardcoded-texts.User Email`),
        align: 'start',
        sortable: true,
        value: 'userEmail',
      }, {
        text: this.$t(`App.hardcoded-texts.Full Name`),
        align: 'start',
        sortable: true,
        value: 'fullName',
      }, {
        text: this.$t(`App.hardcoded-texts.Resource`),
        align: 'start',
        sortable: true,
        value: 'resource',
      }, {
        text: this.$t(`App.hardcoded-texts.Action`),
        align: 'start',
        sortable: true,
        value: 'action',
      }, {
        text: this.$t(`App.hardcoded-texts.Recorded On`),
        align: 'start',
        sortable: true,
        value: 'recorded',
      }, {
        text: this.$t(`App.hardcoded-texts.Operation Outcome`),
        align: 'start',
        sortable: true,
        value: 'outcome',
      }, {
        text: this.$t(`App.hardcoded-texts.Action`),
        value: 'actions',
        sortable: false
      }]
      return headers
    },
    auditEventOutcome() {
      let outcomes = [{
        "code": "0",
        "display": this.$t(`App.hardcoded-texts.Success`),
        "definition": "The operation completed successfully (whether with warnings or not)."
      }, {
        "code": "4",
        "display": this.$t(`App.hardcoded-texts.Minor failure`),
        "definition": "The action was not successful due to some kind of minor failure (often equivalent to an HTTP 400 response)."
      }, {
        "code": "8",
        "display": this.$t(`App.hardcoded-texts.Serious failure`),
        "definition": "The action was not successful due to some kind of unexpected error (often equivalent to an HTTP 500 response)."
      }, {
        "code": "12",
        "display": this.$t(`App.hardcoded-texts.Major failure`),
        "definition": "An error of such magnitude occurred that the system is no longer available for use (i.e. the system died)."
      }]
      return outcomes
    }
  },
  watch: {
    options: {
      handler() {
        this.getData();
      },
      deep: true
    },
    startDate() {
      this.getData(true)
    },
    dateTo() {
      this.getData(true)
    },
    actionSubType() {
      this.getData(true)
    },
    userEmail() {
      this.getData(true)
    },
    operationOutcome() {
      this.getData(true)
    }
  }
}
</script>
