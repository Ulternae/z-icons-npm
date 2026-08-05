import React from 'react';

export interface MinaFiveCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFiveCircleSolid(props: MinaFiveCircleSolidProps): React.ReactElement;
export default MinaFiveCircleSolid;
