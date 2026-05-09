import React from 'react';

export interface MinaListNumberSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaListNumberSolid: React.FC<MinaListNumberSolidProps>;
export default MinaListNumberSolid;
