import React from 'react';

export interface MinaYenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaYen: React.FC<MinaYenProps>;
export default MinaYen;
