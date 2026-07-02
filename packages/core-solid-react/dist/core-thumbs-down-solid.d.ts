import React from 'react';

export interface CoreThumbsDownSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreThumbsDownSolid(props: CoreThumbsDownSolidProps): React.ReactElement;
export default CoreThumbsDownSolid;
