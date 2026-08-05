import React from 'react';

export interface NeoAlarmClockRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoAlarmClockRegularDuo(props: NeoAlarmClockRegularDuoProps): React.ReactElement;
export default NeoAlarmClockRegularDuo;
