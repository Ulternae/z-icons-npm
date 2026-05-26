import React from 'react';

export interface LanChevronUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChevronUp: React.FC<LanChevronUpProps>;
export default LanChevronUp;
