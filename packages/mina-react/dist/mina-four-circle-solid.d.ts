import React from 'react';

export interface MinaFourCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFourCircleSolid(props: MinaFourCircleSolidProps): React.ReactElement;
export default MinaFourCircleSolid;
