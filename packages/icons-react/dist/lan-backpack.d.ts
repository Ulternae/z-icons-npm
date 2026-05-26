import React from 'react';

export interface LanBackpackProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBackpack: React.FC<LanBackpackProps>;
export default LanBackpack;
