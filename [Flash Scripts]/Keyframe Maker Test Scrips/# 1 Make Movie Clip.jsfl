if (fl.getDocumentDOM().selection.length > 0)
{
        mcName = prompt("MovieClip Name", "");
        if (mcName != null)
        {
                newMc = fl.getDocumentDOM().convertToSymbol("movie clip", mcName, "top left");
                fl.getDocumentDOM().selection[0].name = mcName;
        }
}