import React from 'react';

export interface CoreCompassSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCompassSolid(props: CoreCompassSolidProps): React.ReactElement;
export default CoreCompassSolid;
