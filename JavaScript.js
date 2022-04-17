var jsonMuscle = {
    Vasto_Medial_Esquerdo: {
        opacity: 0,
        code: 'VE',
        dor: 0
    },
    Vasto_Medial_Direito: {
        opacity: 0,
        code: 'VD',
        dor: 0
    },
    Pescoco: {
        opacity: 0,
        code: 'pesc',
        dor: 0
    },
    Abdomen: {
        opacity: 0,
        code: 'Abd',
        dor: 0
    },
    Antebraco_Esquerdo: {
        opacity: 0,
        code: 'AntEsq',
        dor: 0
    },
    Biceps_Esquerdo: {
        opacity: 0,
        code: 'BicpEsq',
        dor: 0
    },
    Peito_Esquerdo: {
        opacity: 0,
        code: 'PeitoEsq',
        dor: 0
    },
    cotovelo_Esquerdo: {
        opacity: 0,
        code: 'cotoveloEsq',
        dor: 0
    },
    ombro_Esquerdo: {
        opacity: 0,
        code: 'ombroEsq',
        dor: 0
    },
    trapezio_Esquerdo: {
        opacity: 0,
        code: 'TrapzEsq',
        dor: 0
    },
    Peito_Esquerdo: {
        opacity: 0,
        code: 'PeitoEsq',
        dor: 0
    },
    VastoLateral_Esquerdo: {
        opacity: 0,
        code: 'VLEsq',
        dor: 0
    },
    Femural_Esquerdo: {
        opacity: 0,
        code: 'FemEsq',
        dor: 0
    },
    Serratil_Esquerdo: {
        opacity: 0,
        code: 'SerrEsq',
        dor: 0
    },
    Fascia_Esquerdo: {
        opacity: 0,
        code: 'FacEsq',
        dor: 0
    },
    Sartorio_Esquerdo: {
        opacity: 0,
        code: 'SartEsq',
        dor: 0
    },
    FibularLongo_Esquerdo: {
        opacity: 0,
        code: 'FibEsq',
        dor: 0
    },
    Tibia_Esquerdo: {
        opacity: 0,
        code: 'TibEsq',
        dor: 0
    },
    Gastro_Esquerdo: {
        opacity: 0,
        code: 'GasEsq',
        dor: 0
    },
    Antebraco_Direito: {
        opacity: 0,
        code: 'AntDir',
        dor: 0
    },
    Biceps_Direito: {
        opacity: 0,
        code: 'BicpDir',
        dor: 0
    },
    Peito_Direito: {
        opacity: 0,
        code: 'PeitoDir',
        dor: 0
    },
    cotovelo_Direito: {
        opacity: 0,
        code: 'cotoveloDir',
        dor: 0
    },
    ombro_Direito: {
        opacity: 0,
        code: 'ombroDir',
        dor: 0
    },
    trapezio_Direito: {
        opacity: 0,
        code: 'TrapzDir',
        dor: 0
    },
    Peito_Direito: {
        opacity: 0,
        code: 'PeitoDir',
        dor: 0
    },
    VastoLateral_Direito: {
        opacity: 0,
        code: 'VLDir',
        dor: 0
    },
    Femural_Direito: {
        opacity: 0,
        code: 'FemDir',
        dor: 0
    },
    Serratil_Direito: {
        opacity: 0,
        code: 'SerrDir',
        dor: 0
    },
    Fascia_Direito: {
        opacity: 0,
        code: 'FacDir',
        dor: 0
    },
    Sartorio_Direito: {
        opacity: 0,
        code: 'SartDir',
        dor: 0
    },
    FibularLongo_Direito: {
        opacity: 0,
        code: 'FibDir',
        dor: 0
    },
    Tibia_Direito: {
        opacity: 0,
        code: 'TibDir',
        dor: 0
    },
    Gastro_Direito: {
        opacity: 0,
        code: 'GasDir',
        dor: 0
    }
}
var hover;
var style = document.createElement('style');
function changeClass(object,oldClass,newClass)
{
    // remove:
    //object.className = object.className.replace( /(?:^|\s)oldClass(?!\S)/g , '' );
    // replace:
    var regExp = new RegExp('(?:^|\\s)' + oldClass + '(?!\\S)', 'g');
    object.className = object.className.replace( regExp , newClass );
    // add
    //object.className += " "+newClass;
}

function on_ClickMuscle (id) {
    if (jsonMuscle[id]['opacity'] == 1) {
        jsonMuscle[id]['opacity'] = 0;
        changeClass(document.getElementById(jsonMuscle[id]['code']),"musc_show","musc")
        changeClass(document.getElementById("inp_"+jsonMuscle[id]['code']),"dor","dor_inv")
    }
    else {
        jsonMuscle[id]['opacity'] = 1;
        changeClass(document.getElementById("inp_"+jsonMuscle[id]['code']),"dor_inv","dor")
        changeClass(document.getElementById(jsonMuscle[id]['code']),"musc","musc_show")
    }
    
    console.log(jsonMuscle);
    return jsonMuscle; 
}

function AtribuirAnamnese() {
    let checkboxes = document.querySelectorAll('input[name]:checked');
    checkboxes.forEach((checkbox) => {
        console.log(checkbox.value);
    });
    console.log(checkboxes);
}