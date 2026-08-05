import React from 'react';

export interface MinaParkingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaParkingSolid(props: MinaParkingSolidProps): React.ReactElement;
export default MinaParkingSolid;
