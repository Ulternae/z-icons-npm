import React from 'react';

export interface CoreShareNodesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreShareNodesSolid(props: CoreShareNodesSolidProps): React.ReactElement;
export default CoreShareNodesSolid;
