import React from 'react';

export interface CoreFaceFrownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFaceFrown: React.FC<CoreFaceFrownProps>;
export default CoreFaceFrown;
