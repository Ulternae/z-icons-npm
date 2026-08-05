import React from 'react';

export interface LanAlarmPlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlarmPlusThin(props: LanAlarmPlusThinProps): React.ReactElement;
export default LanAlarmPlusThin;
