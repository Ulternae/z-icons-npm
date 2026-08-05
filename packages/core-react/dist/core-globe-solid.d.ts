import React from 'react';

export interface CoreGlobeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreGlobeSolid(props: CoreGlobeSolidProps): React.ReactElement;
export default CoreGlobeSolid;
