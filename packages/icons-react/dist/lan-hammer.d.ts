import React from 'react';

export interface LanHammerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHammer: React.FC<LanHammerProps>;
export default LanHammer;
