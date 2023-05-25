import { useEffect, useState } from "react"

export const useCalculateCelcius = (kelvin) => {
    const celciusDecimal = kelvin - 273.15;
    const celcius = celciusDecimal.toFixed(2);
    return {  celcius  }
}