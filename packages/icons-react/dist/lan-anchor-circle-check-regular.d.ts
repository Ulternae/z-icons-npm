import React from 'react';

export interface LanAnchorCircleCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAnchorCircleCheckRegular: React.FC<LanAnchorCircleCheckRegularProps>;
export default LanAnchorCircleCheckRegular;
