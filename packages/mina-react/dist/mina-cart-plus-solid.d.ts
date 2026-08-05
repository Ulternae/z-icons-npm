import React from 'react';

export interface MinaCartPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCartPlusSolid(props: MinaCartPlusSolidProps): React.ReactElement;
export default MinaCartPlusSolid;
