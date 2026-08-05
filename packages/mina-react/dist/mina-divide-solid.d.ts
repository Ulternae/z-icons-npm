import React from 'react';

export interface MinaDivideSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDivideSolid(props: MinaDivideSolidProps): React.ReactElement;
export default MinaDivideSolid;
