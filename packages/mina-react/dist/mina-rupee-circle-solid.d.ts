import React from 'react';

export interface MinaRupeeCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRupeeCircleSolid(props: MinaRupeeCircleSolidProps): React.ReactElement;
export default MinaRupeeCircleSolid;
