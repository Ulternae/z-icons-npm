import React from 'react';

export interface LanVolumeMuteSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVolumeMuteSolid: React.FC<LanVolumeMuteSolidProps>;
export default LanVolumeMuteSolid;
