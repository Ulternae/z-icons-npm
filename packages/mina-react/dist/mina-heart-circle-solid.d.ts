import React from 'react';

export interface MinaHeartCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeartCircleSolid(props: MinaHeartCircleSolidProps): React.ReactElement;
export default MinaHeartCircleSolid;
