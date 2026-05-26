import React from 'react';

export interface LanChevronLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChevronLeft: React.FC<LanChevronLeftProps>;
export default LanChevronLeft;
