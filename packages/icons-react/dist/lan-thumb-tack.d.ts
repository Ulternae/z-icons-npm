import React from 'react';

export interface LanThumbTackProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanThumbTack: React.FC<LanThumbTackProps>;
export default LanThumbTack;
