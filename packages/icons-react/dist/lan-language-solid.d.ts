import React from 'react';

export interface LanLanguageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLanguageSolid: React.FC<LanLanguageSolidProps>;
export default LanLanguageSolid;
