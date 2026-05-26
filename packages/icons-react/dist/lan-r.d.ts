import React from 'react';

export interface LanRProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanR: React.FC<LanRProps>;
export default LanR;
