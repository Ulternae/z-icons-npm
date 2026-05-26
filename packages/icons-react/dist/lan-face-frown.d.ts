import React from 'react';

export interface LanFaceFrownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceFrown: React.FC<LanFaceFrownProps>;
export default LanFaceFrown;
