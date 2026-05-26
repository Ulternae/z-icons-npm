import React from 'react';

export interface LanTildeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTilde: React.FC<LanTildeProps>;
export default LanTilde;
