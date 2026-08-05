import React from 'react';

export interface MinaArSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaArSolid(props: MinaArSolidProps): React.ReactElement;
export default MinaArSolid;
