import React from 'react';

export interface LanRoadSpikesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRoadSpikesRegular(props: LanRoadSpikesRegularProps): React.ReactElement;
export default LanRoadSpikesRegular;
