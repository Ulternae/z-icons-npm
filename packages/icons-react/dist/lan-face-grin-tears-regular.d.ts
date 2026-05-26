import React from 'react';

export interface LanFaceGrinTearsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceGrinTearsRegular: React.FC<LanFaceGrinTearsRegularProps>;
export default LanFaceGrinTearsRegular;
