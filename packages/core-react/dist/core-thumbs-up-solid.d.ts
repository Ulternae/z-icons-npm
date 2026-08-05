import React from 'react';

export interface CoreThumbsUpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreThumbsUpSolid(props: CoreThumbsUpSolidProps): React.ReactElement;
export default CoreThumbsUpSolid;
