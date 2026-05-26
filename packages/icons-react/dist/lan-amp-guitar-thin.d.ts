import React from 'react';

export interface LanAmpGuitarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAmpGuitarThin: React.FC<LanAmpGuitarThinProps>;
export default LanAmpGuitarThin;
