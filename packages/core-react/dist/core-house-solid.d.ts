import React from 'react';

export interface CoreHouseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreHouseSolid(props: CoreHouseSolidProps): React.ReactElement;
export default CoreHouseSolid;
