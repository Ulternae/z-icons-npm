import React from 'react';

export interface MinaLanguageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLanguageSolid: React.FC<MinaLanguageSolidProps>;
export default MinaLanguageSolid;
