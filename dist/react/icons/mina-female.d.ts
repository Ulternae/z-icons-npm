import React from 'react';

export interface MinaFemaleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFemale: React.FC<MinaFemaleProps>;
export default MinaFemale;
