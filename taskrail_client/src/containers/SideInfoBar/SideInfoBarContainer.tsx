import { useSelector } from "react-redux";
import Subtask from "../../models/Subtask";
import TaskParent from "../../models/TaskParent";
import { RootState } from "../../redux/store";
import SubtaskInfoBar from "./SubtaskInfoBar";

export default function SideInfoBarContainer() {
    const [selectionType, itemId] = useSelector((state:RootState)=>{
        return [state.railUi.selection.type, state.railUi.selection.itemId];
    })
    // switch(selectionType){
    //     case "SUBTASK":
    //         return (
    //             <SubtaskInfoBar></SubtaskInfoBar>
    //         )
    //     break;
    // }
        // const taskParents = useSelector((state:RootState)=>{
        //     return state.taskData.currentWorkspace?.getTaskParent()
        // })
    
        return (
            <div></div>
        )
    // }
}