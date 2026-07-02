import React from 'react';

export interface CoreExpandSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreExpandSolid(props: CoreExpandSolidProps): React.ReactElement;
export default CoreExpandSolid;
