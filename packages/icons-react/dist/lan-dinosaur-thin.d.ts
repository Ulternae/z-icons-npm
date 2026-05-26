import React from 'react';

export interface LanDinosaurThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDinosaurThin: React.FC<LanDinosaurThinProps>;
export default LanDinosaurThin;
