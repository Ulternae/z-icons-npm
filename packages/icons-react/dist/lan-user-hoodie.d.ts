import React from 'react';

export interface LanUserHoodieProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserHoodie: React.FC<LanUserHoodieProps>;
export default LanUserHoodie;
