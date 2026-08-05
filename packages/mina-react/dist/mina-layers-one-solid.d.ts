import React from 'react';

export interface MinaLayersOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLayersOneSolid(props: MinaLayersOneSolidProps): React.ReactElement;
export default MinaLayersOneSolid;
