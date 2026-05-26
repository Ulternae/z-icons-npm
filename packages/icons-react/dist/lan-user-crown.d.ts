import React from 'react';

export interface LanUserCrownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserCrown: React.FC<LanUserCrownProps>;
export default LanUserCrown;
