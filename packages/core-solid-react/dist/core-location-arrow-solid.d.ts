import React from 'react';

export interface CoreLocationArrowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreLocationArrowSolid(props: CoreLocationArrowSolidProps): React.ReactElement;
export default CoreLocationArrowSolid;
