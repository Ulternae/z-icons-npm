import React from 'react';

export interface MinaCartSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCartSolid(props: MinaCartSolidProps): React.ReactElement;
export default MinaCartSolid;
