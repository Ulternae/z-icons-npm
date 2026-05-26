import React from 'react';

export interface LanVolumeOffSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVolumeOffSolid: React.FC<LanVolumeOffSolidProps>;
export default LanVolumeOffSolid;
