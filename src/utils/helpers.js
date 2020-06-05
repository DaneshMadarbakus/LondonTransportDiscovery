// Reusable functions

export function isDisruptedService (line) {
  return (line.lineStatuses.filter((lineStatus) => { return lineStatus.statusSeverity !== 10 }).length) > 0 ? true : false;
}

export function isNightService(line) {
  return (line.serviceTypes.filter((serviceType) => { return serviceType.name === 'Night' }).length) > 0 ? true : false;
}