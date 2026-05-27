import React from 'react';

export interface NeoAlarmClockRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoAlarmClockRegularDuo: React.FC<NeoAlarmClockRegularDuoProps>;
export default NeoAlarmClockRegularDuo;
