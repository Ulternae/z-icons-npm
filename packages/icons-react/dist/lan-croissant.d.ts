import React from 'react';

export interface LanCroissantProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCroissant: React.FC<LanCroissantProps>;
export default LanCroissant;
