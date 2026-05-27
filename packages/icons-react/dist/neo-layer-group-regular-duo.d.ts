import React from 'react';

export interface NeoLayerGroupRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoLayerGroupRegularDuo: React.FC<NeoLayerGroupRegularDuoProps>;
export default NeoLayerGroupRegularDuo;
