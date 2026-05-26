import React from 'react';

export interface LanVirgoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVirgo: React.FC<LanVirgoProps>;
export default LanVirgo;
