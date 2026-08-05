import React from 'react';

export interface CoreFaceFrownSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFaceFrownSolid(props: CoreFaceFrownSolidProps): React.ReactElement;
export default CoreFaceFrownSolid;
