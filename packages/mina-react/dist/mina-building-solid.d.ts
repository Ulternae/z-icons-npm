import React from 'react';

export interface MinaBuildingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBuildingSolid(props: MinaBuildingSolidProps): React.ReactElement;
export default MinaBuildingSolid;
