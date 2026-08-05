import React from 'react';

export interface MinaImageCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaImageCircleSolid(props: MinaImageCircleSolidProps): React.ReactElement;
export default MinaImageCircleSolid;
