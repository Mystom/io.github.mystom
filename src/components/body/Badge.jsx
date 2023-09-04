const badgeTypes = [
    {
        displayText: "Update",
        className: "badge-update",
    },
    {
        displayText: "Bug Fix",
        className: "badge-bug-fix",
    },
    {
        displayText: "Sneak Peek",
        className: "badge-sneak-peek"
    }
]

function Badge(props) {
    const badge = badgeTypes[props.type]
    return <p className={`badge ${badge.className}`}>{badge.displayText}</p>;
}

export default Badge;
