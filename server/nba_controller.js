let facts = [{id: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYeEEnBxceBzGFycvT8-ecKd-wMiV2PG_Kbm_J-JdUoK8Uhp-sBA&s', name: 'Lebron James', team: 'Lakers', fact: 'He is the 4th person ever to have 33,000 career points.'}];
let id = 1;

function addFact(req, res) {
    const {img, name, team, fact} = req.body;
    facts.push({
        img,
        name,
        team,
        fact,
        id
    })
    id++;
    res.status(200).json(facts);
}

function allFacts(req, res) {
    res.status(200).json(facts)
}

function deleteFact(req, res) {
    let {id} = req.params;
    let index = facts.findIndex(fact => {
        if(fact.id == id) {
            return true;
        }
    })
    facts.splice(index, 1);
    res.status(200).json(facts);
}

function editFact(req, res) {
    let {name, team, fact} = req.body;
    let index = facts.findIndex(fact => 
        fact.id == req.params.id)
    
    let foundFact = facts[index];


    if(name !== undefined) {
        foundFact.name = name;
    }

    if(team !== undefined) {
        foundFact.team = team;
    }

    if(fact !== undefined) {
        foundFact.fact = fact;
    }
    res.status(200).json(facts)
}

module.exports = {
    addFact,
    allFacts,
    deleteFact,
    editFact
}