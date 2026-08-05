import React from 'react';

export interface NeoLayerGroupSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoLayerGroupSolid(props: NeoLayerGroupSolidProps): React.ReactElement;
export default NeoLayerGroupSolid;
