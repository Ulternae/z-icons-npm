import React from 'react';

export interface BruAlipayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruAlipay(props: BruAlipayProps): React.ReactElement;
export default BruAlipay;
