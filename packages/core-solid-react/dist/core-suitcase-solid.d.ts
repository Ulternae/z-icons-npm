import React from 'react';

export interface CoreSuitcaseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreSuitcaseSolid(props: CoreSuitcaseSolidProps): React.ReactElement;
export default CoreSuitcaseSolid;
