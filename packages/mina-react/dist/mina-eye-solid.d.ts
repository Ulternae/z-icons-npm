import React from 'react';

export interface MinaEyeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEyeSolid(props: MinaEyeSolidProps): React.ReactElement;
export default MinaEyeSolid;
