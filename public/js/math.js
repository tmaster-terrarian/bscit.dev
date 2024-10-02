export function approach(value, target, rate)
{
    if (value < target)
        return Math.min((value + rate), target);
    else
        return Math.max((value - rate), target);
}
