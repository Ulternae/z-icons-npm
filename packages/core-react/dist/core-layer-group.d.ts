import React from 'react';

export interface CoreLayerGroupProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreLayerGroup(props: CoreLayerGroupProps): React.ReactElement;
export default CoreLayerGroup;
