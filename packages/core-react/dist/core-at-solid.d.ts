import React from 'react';

export interface CoreAtSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreAtSolid(props: CoreAtSolidProps): React.ReactElement;
export default CoreAtSolid;
