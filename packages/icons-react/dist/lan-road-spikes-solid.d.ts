import React from 'react';

export interface LanRoadSpikesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRoadSpikesSolid: React.FC<LanRoadSpikesSolidProps>;
export default LanRoadSpikesSolid;
