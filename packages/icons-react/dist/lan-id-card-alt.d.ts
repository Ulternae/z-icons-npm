import React from 'react';

export interface LanIdCardAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIdCardAlt: React.FC<LanIdCardAltProps>;
export default LanIdCardAlt;
