import React from 'react';

export interface MinaMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMinus: React.FC<MinaMinusProps>;
export default MinaMinus;
