import React from 'react';

export interface LanRoadSpikesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRoadSpikesThin: React.FC<LanRoadSpikesThinProps>;
export default LanRoadSpikesThin;
