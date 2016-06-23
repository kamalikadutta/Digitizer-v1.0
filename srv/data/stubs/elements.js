var q = require('q');
var stubs = [
  {"id":"A1","model_element":"Customer Order","tags": [{"text":"web"},{"text":"form"},{"text":"paper"},{"text":"planning"},{"text":"survey"}]},
  {"id":"A2","model_element":"Appointment","tags": [{"text":"calendar"},{"text":"participant"},{"text":"customer"},{"text":"period"},{"text":"slot"},{"text":"place"}]},
  {"id":"A3","model_element":"Offer","tags": [{"text":"documentation"},{"text":"text"},{"text":"paper"},{"text":"planning"},{"text":"resource"},{"text":"consumption"},{"text":"estimate"}]},
  {"id":"A4","model_element":"Competitive Comparison","tags": [{"text":"analysis"},{"text":"investigation"},{"text":"competitor"},{"text":"price"},{"text":"overview"}]},
  {"id":"A5","model_element":"Brochures/Leaflets","tags": [{"text":"marketing"},{"text":"advertising"},{"text":"paper"},{"text":"print"},{"text":"customer"},{"text":"contact"},{"text":"post"}]},
  {"id":"A6","model_element":"Bill / Invoice","tags": [{"text":"prices"},{"text":"consumption"},{"text":"list"},{"text":"bill"},{"text":"invoice"},{"text":"resources"},{"text":"customer"},{"text":"participant"},{"text":"document"},{"text":"payment"}]},
  {"id":"A7","model_element":"Consumption Analysis","tags": [{"text":"consumption"},{"text":"list"},{"text":"price"},{"text":"overview"},{"text":"bill"},{"text":"invoice"}]},
  {"id":"A8","model_element":"Approach","tags": [{"text":"drive"},{"text":"road"},{"text":"access"},{"text":"way"},{"text":"route"},{"text":"journey"},{"text":"duration"},{"text":"cost"},{"text":"planning"}]},
  {"id":"A9","model_element":"Delivery","tags": [{"text":"drive"},{"text":"delivery"},{"text":"shipping"},{"text":"transport"},{"text":"costs"},{"text":"duration"},{"text":"route"},{"text":"capacity"}]},
  {"id":"A10","model_element":"Material Consumption","tags": [{"text":"consumption"},{"text":"documentation"},{"text":"stock"},{"text":"warehouse"},{"text":"order"},{"text":"overview"}]},
  {"id":"A11","model_element":"Documentation","tags": [{"text":"documentation"},{"text":"resource"},{"text":"process"},{"text":"text"},{"text":"model"},{"text":"design"},{"text":"image"},{"text":"video"}]},
  {"id":"A12","model_element":"Photos","tags": [{"text":"photo"},{"text":"resource"},{"text":"design"},{"text":"document"},{"text":"image"}]},
  {"id":"A13","model_element":"Videos","tags": [{"text":"video"},{"text":"resource"},{"text":"design"},{"text":"document"},{"text":"image"}]},
  {"id":"A14","model_element":"Prototypes","tags": [{"text":"prototype"},{"text":"design"},{"text":"process"},{"text":"model"}]},
  {"id":"A15","model_element":"Designs","tags": [{"text":"design"},{"text":"resource"},{"text":"prototype"}]},
  {"id":"A16","model_element":"Sketches","tags": [{"text":"design"},{"text":"drawing"},{"text":"sketch"},{"text":"paper"},{"text":"prototype"}]},
  {"id":"A17","model_element":"Paper Model","tags": [{"text":"design"},{"text":"3D"},{"text":"model"},{"text":"paper"},{"text":"prototype"}]},
  {"id":"A18","model_element":"Plans","tags": [{"text":"plan"},{"text":"document"},{"text":"documentation"},{"text":"process"},{"text":"resource"}]},
  {"id":"A19","model_element":"Schedule","tags": [{"text":"plan"},{"text":"time"},{"text":"document"},{"text":"outline"},{"text":"logistics"},{"text":"management"},{"text":"organization"}]},
  {"id":"A20","model_element":"Participant","tags": [{"text":"participants"},{"text":"actor"},{"text":"invitation"},{"text":"schedule"},{"text":"appointment"},{"text":"place"},{"text":"venue"}]},
  {"id":"A21","model_element":"Invitation","tags": [{"text":"Participants"},{"text":"actor"},{"text":"invitation"},{"text":"event"},{"text":"time"},{"text":"customer"},{"text":"place"},{"text":"space"},{"text":"appointment"}]},
  {"id":"A22","model_element":"Spaces/Rooms","tags": [{"text":"place"},{"text":"venue"},{"text":"room"},{"text":"booking"},{"text":"event"},{"text":"appointment"}]},
  {"id":"A23","model_element":"Place","tags": [{"text":"place"},{"text":"location"},{"text":"map"},{"text":"space"}]},
  {"id":"A24","model_element":"Permits","tags": [{"text":"approval"},{"text":"authority"},{"text":"contact"},{"text":"timings"},{"text":"permit"}]},
  {"id":"A25","model_element":"Maps","tags": [{"text":"map"},{"text":"geography"},{"text":"place"},{"text":"GPS"},{"text":"GIS"},{"text":"transport"},{"text":"planning"}]},
  {"id":"A26","model_element":"Transport","tags": [{"text":"road"},{"text":"drive"},{"text":"route"},{"text":"load"},{"text":"cargo"},{"text":"plan"},{"text":"map"},{"text":"shipping"},{"text":"delivery"},{"text":"pickup"},{"text":"capacity"},{"text":"route"},{"text":"cost"},{"text":"management"}]},
  {"id":"A27","model_element":"Pickup","tags": [{"text":"drive"},{"text":"transportation"},{"text":"route"},{"text":"cargo"},{"text":"load"},{"text":"pickup"},{"text":"transport"},{"text":"cost"}]},
  {"id":"A28","model_element":"Reviews","tags": [{"text":"reviews"},{"text":"opinion"},{"text":"customer"},{"text":"review"},{"text":"rating"},{"text":"reputation"}]},
  {"id":"A29","model_element":"Customer File","tags": [{"text":"file"},{"text":"records"},{"text":"participant"},{"text":"text"},{"text":"customer"},{"text":"contact"},{"text":"management"},{"text":"survey"}]},
  {"id":"A30","model_element":"Time tracking / Timesheet","tags": [{"text":"recording"},{"text":"consumed"},{"text":"time"},{"text":"resource"},{"text":"planning"}]},
  {"id":"A31","model_element":"Exchange/Substitute","tags": [{"text":"stock"},{"text":"inventory"},{"text":"management"},{"text":"planning"},{"text":"customer"},{"text":"reputation"}]},
  {"id":"A32","model_element":"Spare parts","tags": [{"text":"spare"},{"text":"substitute"},{"text":"usage"},{"text":"warehouse"},{"text":"management"},{"text":"purchase"},{"text":"shopping"}]},
  {"id":"A33","model_element":"Assistance/Support","tags":[{"text":"solution"},{"text":"assistance"},{"text":"help"},{"text":"customer"},{"text":"call"},{"text":"request"},{"text":"spontaneously"}]},
  {"id":"A34","model_element":"Experts","tags":[{"text":"expert"},{"text":"stakeholder"},{"text":"participant"},{"text":"problem"},{"text":"help"},{"text":"assistance"},{"text":"emergency"}]},
  {"id":"A35","model_element":"Solutions Research","tags": [{"text":"research"},{"text":"documents"},{"text":"solution"},{"text":"help"},{"text":"assistance"},{"text":"emergency"}]},
  {"id":"A36","model_element":"Instructions","tags": [{"text":"document"},{"text":"text"},{"text":"instructions"},{"text":"help"},{"text":"documentation"}]},
  {"id":"A37","model_element":"Workarounds","tags": [{"text":"help"},{"text":"immediate"},{"text":"workaround"},{"text":"experts"},{"text":"solution"}]},
  {"id":"A38","model_element":"Ad-hoc Solutions","tags": [{"text":"instant"},{"text":"help"},{"text":"temporary"},{"text":"solution"}]},
  {"id":"A39","model_element":"Diagnosis Guide","tags": [{"text":"help"},{"text":"diagnosis"},{"text":"expert"},{"text":"document"},{"text":"resource"}]},
  {"id":"A40","model_element":"Diagnosis Device","tags": [{"text":"aid"},{"text":"device"},{"text":"diagnostic"},{"text":"expert"},{"text":"resource"}]},
  {"id":"A41","model_element":"Machine messages/signals","tags": [{"text":"diagnosis"},{"text":"history"},{"text":"overview"},{"text":"document"}]},
  {"id":"A42","model_element":"Advertising","tags": [{"text":"paper"},{"text":"advertising"},{"text":"companies"},{"text":"print"},{"text":"customer"},{"text":"contact"},{"text":"newspaper"}]},
  {"id":"A43","model_element":"Newspaper Advertisement","tags": [{"text":"newspaper"},{"text":"paper"},{"text":"advertising"},{"text":"customer"},{"text":"contact"},{"text":"print"},{"text":"newspaper"}]},
  {"id":"A44","model_element":"Customer Loyalty","tags": [{"text":"actor"},{"text":"user"},{"text":"customer"},{"text":"loyalty"},{"text":"contact"},{"text":"relationship"}]},
  {"id":"A45","model_element":"Supervision","tags": [{"text":"actor"},{"text":"customer"},{"text":"support"},{"text":"contact"},{"text":"follow-up"}]},
  {"id":"A46","model_element":"Follow-up","tags": [{"text":"actor"},{"text":"customer"},{"text":"follow-up"},{"text":"contact"},{"text":"call"},{"text":"text"}]},
  {"id":"A47","model_element":"Maintenance Schedule","tags": [{"text":"maintenance"},{"text":"machine"},{"text":"plan"},{"text":"resource"},{"text":"document"}]},
  {"id":"A48","model_element":"Customer Management","tags": [{"text":"actor"},{"text":"customer"},{"text":"user"},{"text":"platform"},{"text":"administration"},{"text":"contact"},{"text":"management"}]},
  {"id":"A49","model_element":"Stand-by for emergency","tags": [{"text":"emergency"},{"text":"contact"},{"text":"customer"},{"text":"help"},{"text":"immediate"},{"text":"urgent"}]},
  {"id":"A50","model_element":"Calls","tags": [{"text":"telephone"},{"text":"call"},{"text":"customer"},{"text":"contact"}]},
  {"id":"A51","model_element":"Messages","tags": [{"text":"text"},{"text":"message"},{"text":"customer"},{"text":"actor"},{"text":"user"},{"text":"contact"}]},
  {"id":"A52","model_element":"Mailing List","tags": [{"text":"customer"},{"text":"address"},{"text":"contact"},{"text":"management"},{"text":"contacts"},{"text":"overview"},{"text":"group"}]},
  {"id":"A53","model_element":"Logistics Planning","tags": [{"text":"logistic"},{"text":"planning"},{"text":"transportation"},{"text":"capacity"},{"text":"duration"},{"text":"cost"},{"text":"overview"},{"text":"management"}]},
  {"id":"A54","model_element":"Purchase","tags": [{"text":"planning"},{"text":"purchase"},{"text":"prices"},{"text":"costs"},{"text":"capacity"}]},
  {"id":"A55","model_element":"Web presence","tags": [{"text":"company"},{"text":"profile"},{"text":"presentation"},{"text":"customer"},{"text":"contacts"},{"text":"fair"},{"text":"web"},{"text":"email"},{"text":"call"},{"text":"resource"},{"text":"reputation"}]},
  {"id":"A56","model_element":"Model","tags": [{"text":"design"},{"text":"resource"},{"text":"prototype"}]},
  {"id":"A57","model_element":"Stock/Storage/Warehouse","tags": [{"text":"planning"},{"text":"purchase"},{"text":"consumption"},{"text":"usage"},{"text":"resource"},{"text":"stock"},{"text":"inventory"}]},
  {"id":"A58","model_element":"Financial Planning","tags": [{"text":"bill"},{"text":"billing"},{"text":"account"},{"text":"invoice"},{"text":"planning"},{"text":"summary"},{"text":"overview"},{"text":"status"},{"text":"finance"},{"text":"budget"}]},
  {"id":"A59","model_element":"Material Planning","tags":[{"text":"planning"},{"text":"stock"},{"text":"inventory"},{"text":"usage"},{"text":"consumption"},{"text":"resources"},{"text":"documentation"}]},
  {"id":"A60","model_element":"Recommendation","tags": [{"text":"customer"},{"text":"actor"},{"text":"user"},{"text":"reputation"},{"text":"recommendation"},{"text":"acquisition"}]},
  {"id":"A61","model_element":"Call Taxi hiring agency","tags": [{"text":"order"},{"text":"call"},{"text":"request"}]},
  {"id":"A62","model_element":"Assign job to Taxi","tags": [{"text":"job"},{"text":"assign"},{"text":"order"},{"text":"schedule"}]},
  {"id":"A63","model_element":"Taxi rides to customer","tags": [{"text":"transport"},{"text":"transportation"},{"text":"tracking"},{"text":"GPS"},{"text":"GPS-Tracking"}]},
  {"id":"A64","model_element":"Customer is transported","tags": [{"text":"transport"},{"text":"transportation"},{"text":"tracking"},{"text":"GPS"},{"text":"GPS-Tracking"}]},
  {"id":"A65","model_element":"Customer pays","tags": [{"text":"payment"},{"text":"pay"},{"text":"billing"},{"text":"transaction"}]},
  {"id":"A65","model_element":"Customer ends process","tags": [{"text":"evaluation"},{"text":"evaluate"},{"text":"review"},{"text":"rating"}]}

];

var lastStubIndex = stubs.length;

function getAll() {
    return q(stubs);
}

function getOne(id) {
    var element = null;
    stubs.some( function(stub)  {
        element = stub.id == id ? stub : null;
        return element;
    });
    return q(element);
}

function save(element) {
    element.id = 'A'+ ++lastStubIndex;
    stubs.push(element);
    return q(element);
}

function update(element) {
    var stubToUpdateIndex = _getStubIndexById(element.id);
    stubs[stubToUpdateIndex] = element;
    return q(element);
}

function remove(id) {
    var stubToDeleteIndex = _getStubIndexById(id);
    stubToDeleteIndex != -1 && stubs.splice(stubToDeleteIndex,1);
    return q(stubToDeleteIndex != -1 && id);
}

function _getStubIndexById(id) {
    var stubIndex = -1;
    stubs.some( function(stub, index)  {
        var isFound = stub.id == id;
        stubIndex = isFound ? index : -1
        return isFound;
    });
    return stubIndex;
}

exports.getAll =  getAll;
exports.getOne = getOne;
exports.remove = remove;
exports.update = update;
exports.save = save;
