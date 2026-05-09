import React from 'react';

export interface MinaDropProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDrop: React.FC<MinaDropProps>;
export default MinaDrop;
