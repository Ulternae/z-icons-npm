import React from 'react';

export interface LanSpiderWebProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpiderWeb: React.FC<LanSpiderWebProps>;
export default LanSpiderWeb;
