import React from 'react';

export interface MinaWrenchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaWrenchSolid: React.FC<MinaWrenchSolidProps>;
export default MinaWrenchSolid;
