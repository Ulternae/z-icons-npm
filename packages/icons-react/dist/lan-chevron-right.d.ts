import React from 'react';

export interface LanChevronRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChevronRight: React.FC<LanChevronRightProps>;
export default LanChevronRight;
