import React from 'react';

export interface MinaChevronUpDownSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChevronUpDownSolid: React.FC<MinaChevronUpDownSolidProps>;
export default MinaChevronUpDownSolid;
