import React from 'react';

export interface LanCrownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCrown: React.FC<LanCrownProps>;
export default LanCrown;
