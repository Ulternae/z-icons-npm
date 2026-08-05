import React from 'react';

export interface LanRoadBridgeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRoadBridgeThin(props: LanRoadBridgeThinProps): React.ReactElement;
export default LanRoadBridgeThin;
