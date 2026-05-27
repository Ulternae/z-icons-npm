import React from 'react';

export interface CoreShieldSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreShieldSolid: React.FC<CoreShieldSolidProps>;
export default CoreShieldSolid;
