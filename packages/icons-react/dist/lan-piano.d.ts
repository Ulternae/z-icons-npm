import React from 'react';

export interface LanPianoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPiano: React.FC<LanPianoProps>;
export default LanPiano;
