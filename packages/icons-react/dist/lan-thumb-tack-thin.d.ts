import React from 'react';

export interface LanThumbTackThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanThumbTackThin: React.FC<LanThumbTackThinProps>;
export default LanThumbTackThin;
