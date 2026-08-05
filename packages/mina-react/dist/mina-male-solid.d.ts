import React from 'react';

export interface MinaMaleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMaleSolid(props: MinaMaleSolidProps): React.ReactElement;
export default MinaMaleSolid;
