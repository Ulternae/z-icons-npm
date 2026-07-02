import React from 'react';

export interface CoreFlowerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFlowerSolid(props: CoreFlowerSolidProps): React.ReactElement;
export default CoreFlowerSolid;
