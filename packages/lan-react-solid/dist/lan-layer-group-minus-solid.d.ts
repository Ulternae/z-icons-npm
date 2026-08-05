import React from 'react';

export interface LanLayerGroupMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLayerGroupMinusSolid(props: LanLayerGroupMinusSolidProps): React.ReactElement;
export default LanLayerGroupMinusSolid;
