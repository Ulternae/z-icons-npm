import React from 'react';

export interface CoreFaceLaughSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFaceLaughSolid(props: CoreFaceLaughSolidProps): React.ReactElement;
export default CoreFaceLaughSolid;
