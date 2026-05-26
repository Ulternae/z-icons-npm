import React from 'react';

export interface LanRoadSpikesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRoadSpikes: React.FC<LanRoadSpikesProps>;
export default LanRoadSpikes;
