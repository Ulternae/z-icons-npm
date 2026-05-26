import React from 'react';

export interface LanCroissantThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCroissantThin: React.FC<LanCroissantThinProps>;
export default LanCroissantThin;
