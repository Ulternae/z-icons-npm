import React from 'react';

export interface MinaListCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaListCheck: React.FC<MinaListCheckProps>;
export default MinaListCheck;
