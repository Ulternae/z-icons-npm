import React from 'react';

export interface MinaBitcoinCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBitcoinCircleSolid(props: MinaBitcoinCircleSolidProps): React.ReactElement;
export default MinaBitcoinCircleSolid;
