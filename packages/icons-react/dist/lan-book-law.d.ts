import React from 'react';

export interface LanBookLawProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookLaw: React.FC<LanBookLawProps>;
export default LanBookLaw;
