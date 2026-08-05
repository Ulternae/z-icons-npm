import React from 'react';

export interface MinaFiveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFiveSolid(props: MinaFiveSolidProps): React.ReactElement;
export default MinaFiveSolid;
