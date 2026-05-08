import React from 'react';

export interface MinaLampProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLamp: React.FC<MinaLampProps>;
export default MinaLamp;
