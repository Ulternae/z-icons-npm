import React from 'react';

export interface LanAlarmPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlarmPlus(props: LanAlarmPlusProps): React.ReactElement;
export default LanAlarmPlus;
