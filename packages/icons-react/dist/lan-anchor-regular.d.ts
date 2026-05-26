import React from 'react';

export interface LanAnchorRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAnchorRegular: React.FC<LanAnchorRegularProps>;
export default LanAnchorRegular;
