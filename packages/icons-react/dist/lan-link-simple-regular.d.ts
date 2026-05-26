import React from 'react';

export interface LanLinkSimpleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLinkSimpleRegular: React.FC<LanLinkSimpleRegularProps>;
export default LanLinkSimpleRegular;
