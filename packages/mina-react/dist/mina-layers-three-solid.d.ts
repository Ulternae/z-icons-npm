import React from 'react';

export interface MinaLayersThreeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLayersThreeSolid(props: MinaLayersThreeSolidProps): React.ReactElement;
export default MinaLayersThreeSolid;
