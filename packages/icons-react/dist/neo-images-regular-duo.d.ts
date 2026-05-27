import React from 'react';

export interface NeoImagesRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoImagesRegularDuo: React.FC<NeoImagesRegularDuoProps>;
export default NeoImagesRegularDuo;
