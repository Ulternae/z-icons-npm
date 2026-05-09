import React from 'react';

export interface MinaListNumberProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaListNumber: React.FC<MinaListNumberProps>;
export default MinaListNumber;
