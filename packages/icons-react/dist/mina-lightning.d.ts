import React from 'react';

export interface MinaLightningProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLightning: React.FC<MinaLightningProps>;
export default MinaLightning;
