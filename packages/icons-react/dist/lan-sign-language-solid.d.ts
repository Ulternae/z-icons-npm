import React from 'react';

export interface LanSignLanguageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSignLanguageSolid: React.FC<LanSignLanguageSolidProps>;
export default LanSignLanguageSolid;
