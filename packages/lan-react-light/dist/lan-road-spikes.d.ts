import React from 'react';

export interface LanRoadSpikesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRoadSpikes(props: LanRoadSpikesProps): React.ReactElement;
export default LanRoadSpikes;
