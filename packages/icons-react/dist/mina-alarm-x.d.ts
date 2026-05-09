import React from 'react';

export interface MinaAlarmXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAlarmX: React.FC<MinaAlarmXProps>;
export default MinaAlarmX;
