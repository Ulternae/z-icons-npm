import React from 'react';

export interface LanPianoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPianoThin: React.FC<LanPianoThinProps>;
export default LanPianoThin;
