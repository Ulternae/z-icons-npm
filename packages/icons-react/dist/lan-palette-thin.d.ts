import React from 'react';

export interface LanPaletteThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPaletteThin: React.FC<LanPaletteThinProps>;
export default LanPaletteThin;
