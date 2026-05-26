import React from 'react';

export interface LanDinosaurProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDinosaur: React.FC<LanDinosaurProps>;
export default LanDinosaur;
