import React from 'react';

export interface MinaLayersTwoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLayersTwoSolid(props: MinaLayersTwoSolidProps): React.ReactElement;
export default MinaLayersTwoSolid;
