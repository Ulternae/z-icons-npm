import React from 'react';

export interface BruAlipayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruAlipay: React.FC<BruAlipayProps>;
export default BruAlipay;
