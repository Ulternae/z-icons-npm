import React from 'react';

export interface LanMangoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMango: React.FC<LanMangoProps>;
export default LanMango;
