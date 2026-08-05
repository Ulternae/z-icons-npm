import React from 'react';

export interface MinaHashCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHashCircleSolid(props: MinaHashCircleSolidProps): React.ReactElement;
export default MinaHashCircleSolid;
