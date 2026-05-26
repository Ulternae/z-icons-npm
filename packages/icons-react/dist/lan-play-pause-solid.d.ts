import React from 'react';

export interface LanPlayPauseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlayPauseSolid: React.FC<LanPlayPauseSolidProps>;
export default LanPlayPauseSolid;
