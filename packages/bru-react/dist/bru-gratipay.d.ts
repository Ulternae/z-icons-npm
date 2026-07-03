import React from 'react';

export interface BruGratipayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruGratipay(props: BruGratipayProps): React.ReactElement;
export default BruGratipay;
