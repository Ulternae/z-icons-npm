import React from 'react';

export interface MinaDotsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDotsSolid(props: MinaDotsSolidProps): React.ReactElement;
export default MinaDotsSolid;
