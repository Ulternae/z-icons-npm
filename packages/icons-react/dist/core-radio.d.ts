import React from 'react';

export interface CoreRadioProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreRadio: React.FC<CoreRadioProps>;
export default CoreRadio;
