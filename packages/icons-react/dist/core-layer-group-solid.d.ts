import React from 'react';

export interface CoreLayerGroupSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreLayerGroupSolid: React.FC<CoreLayerGroupSolidProps>;
export default CoreLayerGroupSolid;
