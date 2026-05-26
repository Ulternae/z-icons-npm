import React from 'react';

export interface LanFaceSmileProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSmile: React.FC<LanFaceSmileProps>;
export default LanFaceSmile;
