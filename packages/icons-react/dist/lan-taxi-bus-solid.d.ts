import React from 'react';

export interface LanTaxiBusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTaxiBusSolid: React.FC<LanTaxiBusSolidProps>;
export default LanTaxiBusSolid;
