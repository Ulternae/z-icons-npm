import React from 'react';

export interface LanLayerGroupPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLayerGroupPlusSolid: React.FC<LanLayerGroupPlusSolidProps>;
export default LanLayerGroupPlusSolid;
