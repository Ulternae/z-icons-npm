import React from 'react';

export interface LanFaceSmileHornsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSmileHorns: React.FC<LanFaceSmileHornsProps>;
export default LanFaceSmileHorns;
