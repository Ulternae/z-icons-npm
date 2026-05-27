import React from 'react';

export interface NeoLayerGroupSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoLayerGroupSolid: React.FC<NeoLayerGroupSolidProps>;
export default NeoLayerGroupSolid;
