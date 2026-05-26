import React from 'react';

export interface LanArchwayThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArchwayThin: React.FC<LanArchwayThinProps>;
export default LanArchwayThin;
