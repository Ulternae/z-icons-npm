import React from 'react';

export interface NeoAtRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoAtRegularDuo: React.FC<NeoAtRegularDuoProps>;
export default NeoAtRegularDuo;
