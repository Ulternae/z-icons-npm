import React from 'react';

export interface LanRoadSpikesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRoadSpikesSolid(props: LanRoadSpikesSolidProps): React.ReactElement;
export default LanRoadSpikesSolid;
