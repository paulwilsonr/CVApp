import uniqid from 'uniqid';

const handleForms = {
    findIndex(key, arr) {
        let index = arr.findIndex(item => item.key === key);
        return index;
    },
    handleClick(key, arr, setCurrentView, setEditOpen) {
        let index = this.findIndex(key, arr);
        let shownSelection = arr[index];
        setCurrentView(shownSelection);
        setEditOpen(true);
    },
    handleDelete (currentSelection, arr, mainArrKey, handleChange, setEditOpen) {
        let index = this.findIndex(currentSelection.key, arr);
        let tempArr = [...arr];
        tempArr.splice(index, 1);
        handleChange({[mainArrKey]: tempArr});
        setEditOpen(false);
    },
    handleCancel (setEditOpen) {
        setEditOpen(false);
    },
    handleSave (currentSelection, arr, mainArrKey, handleChange, setEditOpen, entryType) {
        if(mainArrKey==='education') {
            if(!currentSelection.schoolName) {
                currentSelection.schoolName = 'New School';
            }
        } else {
            if(!currentSelection.companyName) {
                currentSelection.companyName = 'New Experience';
            }
        }
        let index = this.findIndex(currentSelection.key, arr); 
        let tempArr= [...arr];
        index === -1 ? tempArr.push(currentSelection) : tempArr[index] = currentSelection;
        
        handleChange({[mainArrKey]: tempArr});
        setEditOpen(false);
    },
    handleAddNew (arr, newType, handleChange, setCurrentView, setEditOpen) {
        let tempArr = [...arr];
        let newEntry = {};
        let mainArrKey;
        switch(newType) {
            case 'school':
                newEntry = {
                    schoolName: '',
                    study: '',
                    schoolStart: '',
                    schoolEnd: '',
                    key: uniqid(),
                };
                mainArrKey = 'education';
                break;
            case 'job':
                newEntry = {
                    companyName: '',
                    jobTitle: '',
                    jobDesc: '',
                    jobStart: '',
                    jobEnd: '',
                    jobLocation: '',
                    key: uniqid(),
                }
                mainArrKey = 'experience';
                break
        }
        tempArr.push(newEntry);
        setCurrentView(newEntry);
        setEditOpen(true);
        return;
    }
}


export default handleForms;