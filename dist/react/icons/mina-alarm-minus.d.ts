import React from 'react';

export interface MinaAlarmMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAlarmMinus: React.FC<MinaAlarmMinusProps>;
export default MinaAlarmMinus;
