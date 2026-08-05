import React from 'react';

export interface MinaHeadingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeadingSolid(props: MinaHeadingSolidProps): React.ReactElement;
export default MinaHeadingSolid;
