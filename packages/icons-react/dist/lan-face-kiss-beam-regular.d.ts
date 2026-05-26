import React from 'react';

export interface LanFaceKissBeamRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceKissBeamRegular: React.FC<LanFaceKissBeamRegularProps>;
export default LanFaceKissBeamRegular;
