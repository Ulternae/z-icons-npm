import React from 'react';

export interface NeoLanguageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoLanguageSolid: React.FC<NeoLanguageSolidProps>;
export default NeoLanguageSolid;
