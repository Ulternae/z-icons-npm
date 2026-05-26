import React from 'react';

export interface LanRoadSpikesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRoadSpikesRegular: React.FC<LanRoadSpikesRegularProps>;
export default LanRoadSpikesRegular;
