import React from 'react';

export interface NeoLayerGroupProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoLayerGroup(props: NeoLayerGroupProps): React.ReactElement;
export default NeoLayerGroup;
