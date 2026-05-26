import React from 'react';

export interface LanAcornProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAcorn: React.FC<LanAcornProps>;
export default LanAcorn;
