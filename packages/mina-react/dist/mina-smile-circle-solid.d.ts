import React from 'react';

export interface MinaSmileCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSmileCircleSolid(props: MinaSmileCircleSolidProps): React.ReactElement;
export default MinaSmileCircleSolid;
