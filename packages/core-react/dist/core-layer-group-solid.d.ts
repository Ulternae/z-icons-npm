import React from 'react';

export interface CoreLayerGroupSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreLayerGroupSolid(props: CoreLayerGroupSolidProps): React.ReactElement;
export default CoreLayerGroupSolid;
