import React from 'react';

export interface MinaServersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaServersSolid(props: MinaServersSolidProps): React.ReactElement;
export default MinaServersSolid;
