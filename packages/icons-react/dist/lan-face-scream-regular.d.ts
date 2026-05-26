import React from 'react';

export interface LanFaceScreamRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceScreamRegular: React.FC<LanFaceScreamRegularProps>;
export default LanFaceScreamRegular;
