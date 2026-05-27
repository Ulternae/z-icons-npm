import React from 'react';

export interface CoreLayerGroupRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreLayerGroupRegularDuo: React.FC<CoreLayerGroupRegularDuoProps>;
export default CoreLayerGroupRegularDuo;
