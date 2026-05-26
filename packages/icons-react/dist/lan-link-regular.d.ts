import React from 'react';

export interface LanLinkRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLinkRegular: React.FC<LanLinkRegularProps>;
export default LanLinkRegular;
