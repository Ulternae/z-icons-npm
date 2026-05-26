import React from 'react';

export interface LanFaceExplodeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceExplodeRegular: React.FC<LanFaceExplodeRegularProps>;
export default LanFaceExplodeRegular;
