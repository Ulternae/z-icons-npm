import React from 'react';

export interface MinaThreeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaThreeSolid(props: MinaThreeSolidProps): React.ReactElement;
export default MinaThreeSolid;
