import React from 'react';

export interface MinaAlarmMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAlarmMinus(props: MinaAlarmMinusProps): React.ReactElement;
export default MinaAlarmMinus;
