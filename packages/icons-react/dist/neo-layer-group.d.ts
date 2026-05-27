import React from 'react';

export interface NeoLayerGroupProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoLayerGroup: React.FC<NeoLayerGroupProps>;
export default NeoLayerGroup;
