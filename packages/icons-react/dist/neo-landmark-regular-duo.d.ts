import React from 'react';

export interface NeoLandmarkRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoLandmarkRegularDuo: React.FC<NeoLandmarkRegularDuoProps>;
export default NeoLandmarkRegularDuo;
