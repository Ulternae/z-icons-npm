import React from 'react';

export interface MinaBankProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBank: React.FC<MinaBankProps>;
export default MinaBank;
