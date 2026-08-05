import React from 'react';

export interface LanLayerGroupSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLayerGroupSolid(props: LanLayerGroupSolidProps): React.ReactElement;
export default LanLayerGroupSolid;
