import React from 'react';

export interface LanFaceMonocleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceMonocleRegular: React.FC<LanFaceMonocleRegularProps>;
export default LanFaceMonocleRegular;
