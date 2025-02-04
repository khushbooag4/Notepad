import React, { useContext, useState } from "react";
import { AiFillDelete, AiOutlineFontSize } from "react-icons/ai";
import { insertTimeAndDate, selectAllOfInput } from "../../../helpers";
import { DrawModeContext, DrawPadRefContext } from "../../../contexts/Context";

function Edit() {
  const [showEdit, setShowEdit] = useState(false);
  const { drawMode } = useContext(DrawModeContext);
  const { drawPadRef } = useContext(DrawPadRefContext);

  return (
    <div className="dropdown">
      <button
        className="btn"
        onClick={() => setShowEdit(!showEdit)}
        onBlur={() => {
          setTimeout(() => setShowEdit(false), 150);
        }}
      >
        Edit
      </button>
      <div
        className="dropdown-content"
        style={{ display: showEdit ? "block" : "none" }}
      >
        {drawMode ? (
          <>
            <button className="menu-btn btn" onClick={drawPadRef?.undo}>
              Undo <kbd>Ctrl + Z</kbd>
            </button>
            <hr />

            <button className="menu-btn btn" onClick={drawPadRef?.clear}>
              Clear <kbd>Ctrl + Y</kbd>
            </button>
            <button className="menu-btn btn" onClick={drawPadRef?.eraseAll}>
              Erase all{" "}
              <kbd>
                <AiFillDelete />
              </kbd>
            </button>
          </>
        ) : (
          <>
            <button className="menu-btn btn">
              Undo <kbd>Ctrl + Z</kbd>
            </button>
            <hr />

            <button className="menu-btn btn">
              Cut <kbd>Ctrl + X</kbd>
            </button>
            <button className="menu-btn btn">
              Copy <kbd>Ctrl + C</kbd>
            </button>
            <button className="menu-btn btn">
              Paste <kbd>Ctrl + P</kbd>
            </button>
            <button className="menu-btn btn">
              Delete <kbd>Del</kbd>
            </button>
            <hr />

            <button className="menu-btn btn">
              Find <kbd>Ctrl + F</kbd>
            </button>
            <button className="menu-btn btn">
              Go to <kbd>Ctrl + G</kbd>
            </button>
            <hr />

            <button
              className="menu-btn btn"
              onClick={() =>
                selectAllOfInput(
                  document.getElementById("text-area") as HTMLTextAreaElement
                )
              }
            >
              Select All <kbd>Ctrl + A</kbd>
            </button>
            <button
              className="menu-btn btn"
              onClick={() => {
                insertTimeAndDate(
                  document.getElementById("text-area") as HTMLTextAreaElement
                );
              }}
            >
              Time/Date <kbd>F5</kbd>
            </button>
            <hr />

            <button className="menu-btn btn">
              Font{" "}
              <p>
                <AiOutlineFontSize />
              </p>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Edit;
