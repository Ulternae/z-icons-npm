import React from 'react';

export interface MinaRadioProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRadio: React.FC<MinaRadioProps>;
export default MinaRadio;
