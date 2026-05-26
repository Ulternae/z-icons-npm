import React from 'react';

export interface LanChevronDoubleUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChevronDoubleUp: React.FC<LanChevronDoubleUpProps>;
export default LanChevronDoubleUp;
