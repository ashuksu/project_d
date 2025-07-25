const Helpers = {
    formatting(sText: string | undefined | null, ...args: unknown[]): string {
        return typeof sText === "string"
            ? sText.replace(/{(\d+)}/g, (match, i) =>
                typeof args[i] !== "undefined" ? String(args[i]) : match
            )
            : "";
    },
};

export default Helpers;
