let activeColor = 'black';

function generateGrid() {
    const grid = $("#game-grid");

    for (let r = 0; r < 20; r++) {
        const row = $("<tr></tr>");

        for (let c = 0; c < 20; c++) {
            const cell = $("<td></td>")
                .addClass("game-cell")
                .attr("id", `cell${r}${c}`)
                .attr("data-row", r)
                .attr("data-col", c);

            row.append(cell);
        }

        grid.append(row);
    }
}

$("#game-grid").empty();
generateGrid();

$(".strip-cell").click(function () {
    $(".selected").removeClass("selected");
    $(this).addClass("selected");

    activeColor = $(this).data("color");

    updateAllCellColors(activeColor);
});

function paintCell(r, c, color) {
    if (r < 0 || r >= 20 || c < 0 || c >= 20) return;

    const cell = $(`.game-cell[data-row="${r}"][data-col="${c}"]`);

    if (!cell.length) return;

    if (cell.css("background-color") === "rgb(255, 255, 255)") {
        cell.css("background-color", color);
        cell.addClass("colored");
    } else {
        cell.css("background-color", "white");
        cell.removeClass("colored");
    }
}

$(document).on("click", ".game-cell", function () {
    const r = parseInt($(this).attr("data-row"));
    const c = parseInt($(this).attr("data-col"));
    const selectedColor = $(".strip-cell.selected").data("color");

    paintCell(r, c, selectedColor);
    paintCell(r - 1, c, selectedColor);
    paintCell(r + 1, c, selectedColor);
    paintCell(r, c - 1, selectedColor);
    paintCell(r, c + 1, selectedColor);
});

function updateAllCellColors(newColor) {
    $(".colored").css("background-color", newColor);
}
