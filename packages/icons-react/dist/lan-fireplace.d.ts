import React from 'react';

export interface LanFireplaceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFireplace: React.FC<LanFireplaceProps>;
export default LanFireplace;
