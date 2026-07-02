import React from 'react';

export interface CoreLocationDotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreLocationDotSolid(props: CoreLocationDotSolidProps): React.ReactElement;
export default CoreLocationDotSolid;
