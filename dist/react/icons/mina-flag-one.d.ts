import React from 'react';

export interface MinaFlagOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFlagOne: React.FC<MinaFlagOneProps>;
export default MinaFlagOne;
