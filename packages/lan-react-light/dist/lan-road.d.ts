import React from 'react';

export interface LanRoadProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRoad(props: LanRoadProps): React.ReactElement;
export default LanRoad;
