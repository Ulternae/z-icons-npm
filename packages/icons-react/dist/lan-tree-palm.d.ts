import React from 'react';

export interface LanTreePalmProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTreePalm: React.FC<LanTreePalmProps>;
export default LanTreePalm;
