import React from 'react';

export interface NeoFaceSmileRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFaceSmileRegularDuo: React.FC<NeoFaceSmileRegularDuoProps>;
export default NeoFaceSmileRegularDuo;
