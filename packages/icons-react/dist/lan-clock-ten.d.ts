import React from 'react';

export interface LanClockTenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockTen: React.FC<LanClockTenProps>;
export default LanClockTen;
