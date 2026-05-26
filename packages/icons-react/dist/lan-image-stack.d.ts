import React from 'react';

export interface LanImageStackProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImageStack: React.FC<LanImageStackProps>;
export default LanImageStack;
