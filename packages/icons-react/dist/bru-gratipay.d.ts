import React from 'react';

export interface BruGratipayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruGratipay: React.FC<BruGratipayProps>;
export default BruGratipay;
