import React from 'react';

export interface MinaListSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaListSolid: React.FC<MinaListSolidProps>;
export default MinaListSolid;
