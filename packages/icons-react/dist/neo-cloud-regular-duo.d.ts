import React from 'react';

export interface NeoCloudRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCloudRegularDuo: React.FC<NeoCloudRegularDuoProps>;
export default NeoCloudRegularDuo;
