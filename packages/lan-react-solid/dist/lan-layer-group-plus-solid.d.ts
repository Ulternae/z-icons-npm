import React from 'react';

export interface LanLayerGroupPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLayerGroupPlusSolid(props: LanLayerGroupPlusSolidProps): React.ReactElement;
export default LanLayerGroupPlusSolid;
