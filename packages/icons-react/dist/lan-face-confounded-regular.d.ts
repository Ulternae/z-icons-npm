import React from 'react';

export interface LanFaceConfoundedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceConfoundedRegular: React.FC<LanFaceConfoundedRegularProps>;
export default LanFaceConfoundedRegular;
