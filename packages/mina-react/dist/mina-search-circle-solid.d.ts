import React from 'react';

export interface MinaSearchCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSearchCircleSolid(props: MinaSearchCircleSolidProps): React.ReactElement;
export default MinaSearchCircleSolid;
