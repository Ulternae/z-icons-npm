import React from 'react';

export interface LanRoadBridgeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRoadBridgeSolid: React.FC<LanRoadBridgeSolidProps>;
export default LanRoadBridgeSolid;
