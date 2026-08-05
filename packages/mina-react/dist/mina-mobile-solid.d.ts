import React from 'react';

export interface MinaMobileSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMobileSolid(props: MinaMobileSolidProps): React.ReactElement;
export default MinaMobileSolid;
