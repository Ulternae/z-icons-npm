import React from 'react';

export interface CoreWrenchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreWrenchSolid: React.FC<CoreWrenchSolidProps>;
export default CoreWrenchSolid;
