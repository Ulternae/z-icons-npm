import React from 'react';

export interface CoreStoreSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreStoreSolid(props: CoreStoreSolidProps): React.ReactElement;
export default CoreStoreSolid;
