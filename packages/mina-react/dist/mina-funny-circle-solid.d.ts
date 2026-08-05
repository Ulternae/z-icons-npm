import React from 'react';

export interface MinaFunnyCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFunnyCircleSolid(props: MinaFunnyCircleSolidProps): React.ReactElement;
export default MinaFunnyCircleSolid;
