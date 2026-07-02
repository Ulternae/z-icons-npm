import React from 'react';

export interface CoreTrophySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreTrophySolid(props: CoreTrophySolidProps): React.ReactElement;
export default CoreTrophySolid;
