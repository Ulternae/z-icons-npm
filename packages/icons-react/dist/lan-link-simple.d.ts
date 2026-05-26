import React from 'react';

export interface LanLinkSimpleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLinkSimple: React.FC<LanLinkSimpleProps>;
export default LanLinkSimple;
