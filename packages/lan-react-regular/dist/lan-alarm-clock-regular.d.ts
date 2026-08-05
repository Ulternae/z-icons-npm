import React from 'react';

export interface LanAlarmClockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlarmClockRegular(props: LanAlarmClockRegularProps): React.ReactElement;
export default LanAlarmClockRegular;
