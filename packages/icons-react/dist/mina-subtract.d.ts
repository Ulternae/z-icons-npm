import React from 'react';

export interface MinaSubtractProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSubtract: React.FC<MinaSubtractProps>;
export default MinaSubtract;
