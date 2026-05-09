import React from 'react';

export interface MinaChevronUpLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChevronUpLeft: React.FC<MinaChevronUpLeftProps>;
export default MinaChevronUpLeft;
