import React from 'react';

export interface CoreUsersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreUsersSolid(props: CoreUsersSolidProps): React.ReactElement;
export default CoreUsersSolid;
