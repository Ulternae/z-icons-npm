import React from 'react';

export interface MinaBanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBan: React.FC<MinaBanProps>;
export default MinaBan;
