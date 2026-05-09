import React from 'react';

export interface MinaChevronRightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChevronRightSolid: React.FC<MinaChevronRightSolidProps>;
export default MinaChevronRightSolid;
