import React from 'react';

export interface LanFaceWorriedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceWorriedRegular: React.FC<LanFaceWorriedRegularProps>;
export default LanFaceWorriedRegular;
