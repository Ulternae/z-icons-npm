import React from 'react';

export interface LanHoseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHose: React.FC<LanHoseProps>;
export default LanHose;
