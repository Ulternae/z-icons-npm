import React from 'react';

export interface LanPooBoltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPooBolt: React.FC<LanPooBoltProps>;
export default LanPooBolt;
