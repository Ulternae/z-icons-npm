import React from 'react';

export interface LanFaceSmileRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSmileRegular: React.FC<LanFaceSmileRegularProps>;
export default LanFaceSmileRegular;
