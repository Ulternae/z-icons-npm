import React from 'react';

export interface MinaClockTenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaClockTen: React.FC<MinaClockTenProps>;
export default MinaClockTen;
