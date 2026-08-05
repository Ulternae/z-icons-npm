import React from 'react';

export interface NeoLayerGroupRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoLayerGroupRegularDuo(props: NeoLayerGroupRegularDuoProps): React.ReactElement;
export default NeoLayerGroupRegularDuo;
