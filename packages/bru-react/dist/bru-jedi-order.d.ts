import React from 'react';

export interface BruJediOrderProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruJediOrder(props: BruJediOrderProps): React.ReactElement;
export default BruJediOrder;
