import React from 'react';

export interface LanFaceWorriedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceWorried: React.FC<LanFaceWorriedProps>;
export default LanFaceWorried;
