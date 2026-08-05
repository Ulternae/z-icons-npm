import React from 'react';

export interface MinaLayersTwoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLayersTwo(props: MinaLayersTwoProps): React.ReactElement;
export default MinaLayersTwo;
