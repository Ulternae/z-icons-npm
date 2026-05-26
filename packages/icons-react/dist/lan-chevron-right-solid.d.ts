import React from 'react';

export interface LanChevronRightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChevronRightSolid: React.FC<LanChevronRightSolidProps>;
export default LanChevronRightSolid;
