import React from 'react';

export interface CoreSunSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreSunSolid(props: CoreSunSolidProps): React.ReactElement;
export default CoreSunSolid;
