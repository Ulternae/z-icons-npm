import React from 'react';

export interface LanPipeValveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPipeValveSolid: React.FC<LanPipeValveSolidProps>;
export default LanPipeValveSolid;
