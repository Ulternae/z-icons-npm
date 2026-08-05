import React from 'react';

export interface LanRoadSpikesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRoadSpikesThin(props: LanRoadSpikesThinProps): React.ReactElement;
export default LanRoadSpikesThin;
