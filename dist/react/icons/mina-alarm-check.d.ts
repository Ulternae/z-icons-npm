import React from 'react';

export interface MinaAlarmCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAlarmCheck: React.FC<MinaAlarmCheckProps>;
export default MinaAlarmCheck;
