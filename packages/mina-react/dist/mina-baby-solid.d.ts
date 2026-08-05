import React from 'react';

export interface MinaBabySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBabySolid(props: MinaBabySolidProps): React.ReactElement;
export default MinaBabySolid;
