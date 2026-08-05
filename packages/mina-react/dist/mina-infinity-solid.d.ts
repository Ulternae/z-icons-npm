import React from 'react';

export interface MinaInfinitySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaInfinitySolid(props: MinaInfinitySolidProps): React.ReactElement;
export default MinaInfinitySolid;
