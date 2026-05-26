import React from 'react';

export interface LanWaffleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWaffleSolid: React.FC<LanWaffleSolidProps>;
export default LanWaffleSolid;
