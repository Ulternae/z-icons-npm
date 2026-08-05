import React from 'react';

export interface MinaFlower2SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFlower2Solid(props: MinaFlower2SolidProps): React.ReactElement;
export default MinaFlower2Solid;
