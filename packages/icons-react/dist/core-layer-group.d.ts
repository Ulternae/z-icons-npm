import React from 'react';

export interface CoreLayerGroupProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreLayerGroup: React.FC<CoreLayerGroupProps>;
export default CoreLayerGroup;
