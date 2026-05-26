import React from 'react';

export interface LanCaravanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCaravan: React.FC<LanCaravanProps>;
export default LanCaravan;
