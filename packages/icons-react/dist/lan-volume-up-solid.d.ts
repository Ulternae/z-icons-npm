import React from 'react';

export interface LanVolumeUpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVolumeUpSolid: React.FC<LanVolumeUpSolidProps>;
export default LanVolumeUpSolid;
