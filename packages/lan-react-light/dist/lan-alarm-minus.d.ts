import React from 'react';

export interface LanAlarmMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlarmMinus(props: LanAlarmMinusProps): React.ReactElement;
export default LanAlarmMinus;
