import React from 'react';

export interface LanFaceSmileHaloProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSmileHalo: React.FC<LanFaceSmileHaloProps>;
export default LanFaceSmileHalo;
