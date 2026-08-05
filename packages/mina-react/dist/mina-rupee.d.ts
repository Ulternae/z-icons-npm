import React from 'react';

export interface MinaRupeeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRupee(props: MinaRupeeProps): React.ReactElement;
export default MinaRupee;
