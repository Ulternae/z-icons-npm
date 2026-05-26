import React from 'react';

export interface LanBridgeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBridgeSolid: React.FC<LanBridgeSolidProps>;
export default LanBridgeSolid;
