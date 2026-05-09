import React from 'react';

export interface MinaLightningOffProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLightningOff: React.FC<MinaLightningOffProps>;
export default MinaLightningOff;
