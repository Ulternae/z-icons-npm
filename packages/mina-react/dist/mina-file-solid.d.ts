import React from 'react';

export interface MinaFileSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFileSolid(props: MinaFileSolidProps): React.ReactElement;
export default MinaFileSolid;
