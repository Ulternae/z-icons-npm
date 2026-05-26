import React from 'react';

export interface LanSwedishKronaSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSwedishKronaSign: React.FC<LanSwedishKronaSignProps>;
export default LanSwedishKronaSign;
