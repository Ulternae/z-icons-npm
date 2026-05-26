import React from 'react';

export interface LanPianoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPianoRegular: React.FC<LanPianoRegularProps>;
export default LanPianoRegular;
