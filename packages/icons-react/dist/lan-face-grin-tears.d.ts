import React from 'react';

export interface LanFaceGrinTearsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceGrinTears: React.FC<LanFaceGrinTearsProps>;
export default LanFaceGrinTears;
