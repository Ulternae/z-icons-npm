import React from 'react';

export interface LanLinkHorizontalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLinkHorizontalRegular: React.FC<LanLinkHorizontalRegularProps>;
export default LanLinkHorizontalRegular;
