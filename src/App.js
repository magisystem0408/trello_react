import _ from "lodash"
import './App.css';
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import {useState} from "react";

function App() {
    const [items,setItem] =useState(["item0","item1","item2"])
    // ドラックが終わった瞬間に呼ばれる
    const onDragEnd = (result) => {
        // ここで並べ替えをする
        //最初
        console.log(result.source.index)
        // 最後
        console.log(result.destination.index)

        // 削除したり追加できる]
        // 動かしたものを一つ削除できる
        const remove =items.splice(result.source.index,1)
        console.log(remove)
        // 追加する
        items.splice(result.destination.index,0,remove[0])
    }
    return (
        <div className="dragDropArea">
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            <Draggable draggableId="item0" index={0}>
                                {/*dragHandlePropsでドラックできるようになる*/}
                                {(provided) => (<div
                                    className="item"
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                >{items[0]}</div>)}
                            </Draggable>

                            <Draggable draggableId="item1" index={1}>
                                {/*dragHandlePropsでドラックできるようになる*/}
                                {(provided) => (<div
                                    className="item"
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                >{items[1]}</div>)}
                            </Draggable>

                            <Draggable draggableId="item2" index={2}>
                                {/*dragHandlePropsでドラックできるようになる*/}
                                {(provided) => (<div
                                    className="item"
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                >{items[2]}</div>)}
                            </Draggable>
                            {/*ドラックが終わった瞬間に*/}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
}

export default App;
