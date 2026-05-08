import React from 'react';

export interface MinaChevronUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChevronUp: React.FC<MinaChevronUpProps>;
export default MinaChevronUp;
