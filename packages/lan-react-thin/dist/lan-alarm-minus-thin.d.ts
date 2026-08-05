import React from 'react';

export interface LanAlarmMinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlarmMinusThin(props: LanAlarmMinusThinProps): React.ReactElement;
export default LanAlarmMinusThin;
