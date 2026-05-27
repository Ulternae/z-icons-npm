import React from 'react';

export interface CoreCrownSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCrownSolid: React.FC<CoreCrownSolidProps>;
export default CoreCrownSolid;
