import React from 'react';

export interface CoreCrownSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCrownSolid(props: CoreCrownSolidProps): React.ReactElement;
export default CoreCrownSolid;
