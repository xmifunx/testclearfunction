export default function calculateCondition(character) {
    if (Number(character.health) > 50) {
        return "healthy";
    }
    else if (Number(character.health) > 15 && Number(character.health) < 50) {
        return "wounded";
    }
    else {
        return "critical";
    }
}