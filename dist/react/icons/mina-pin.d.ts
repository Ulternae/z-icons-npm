import React from 'react';

export interface MinaPinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPin: React.FC<MinaPinProps>;
export default MinaPin;
