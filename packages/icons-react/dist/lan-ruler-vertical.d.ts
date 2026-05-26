import React from 'react';

export interface LanRulerVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRulerVertical: React.FC<LanRulerVerticalProps>;
export default LanRulerVertical;
