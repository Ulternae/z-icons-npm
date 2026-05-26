import React from 'react';

export interface LanLayerGroupMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLayerGroupMinusSolid: React.FC<LanLayerGroupMinusSolidProps>;
export default LanLayerGroupMinusSolid;
