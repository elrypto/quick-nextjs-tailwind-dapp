export const formatAddr = (addr: string, startDistance: number = 6, endDistance: number = 6) => {
  return `${addr.slice(0, startDistance)}...${addr.slice(addr.length - endDistance, addr.length)}`
}

export const decFor = (num: number, numberOf: number = 2) => (
  (Math.round(num * 100) / 100).toFixed(numberOf)
)

export const formatBal = (bigNumBal: any, decimalLen:number=18, decimalPull:number=2) => {
  //TODO: should be minus percision, not hardcoded 18... based on token precision
 let formatted = bigNumBal.toString();
 return `${formatted.slice(0, formatted.length - decimalLen)}.${formatted.slice(formatted.length-decimalLen, formatted.length - decimalLen + decimalPull)}`
}

