import React from 'react';

export interface LanUserMdProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserMd: React.FC<LanUserMdProps>;
export default LanUserMd;
