import React from 'react';

export interface MinaFilterOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFilterOne: React.FC<MinaFilterOneProps>;
export default MinaFilterOne;
