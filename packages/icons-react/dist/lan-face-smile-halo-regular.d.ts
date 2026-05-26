import React from 'react';

export interface LanFaceSmileHaloRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSmileHaloRegular: React.FC<LanFaceSmileHaloRegularProps>;
export default LanFaceSmileHaloRegular;
