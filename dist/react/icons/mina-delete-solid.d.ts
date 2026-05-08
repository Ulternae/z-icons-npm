import React from 'react';

export interface MinaDeleteSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDeleteSolid: React.FC<MinaDeleteSolidProps>;
export default MinaDeleteSolid;
