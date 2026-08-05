import React from 'react';

export interface MinaFrameSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFrameSolid(props: MinaFrameSolidProps): React.ReactElement;
export default MinaFrameSolid;
