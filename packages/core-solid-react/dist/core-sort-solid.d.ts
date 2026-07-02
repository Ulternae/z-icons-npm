import React from 'react';

export interface CoreSortSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreSortSolid(props: CoreSortSolidProps): React.ReactElement;
export default CoreSortSolid;
