import React from 'react';

export interface MinaCloudLightningProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCloudLightning: React.FC<MinaCloudLightningProps>;
export default MinaCloudLightning;
