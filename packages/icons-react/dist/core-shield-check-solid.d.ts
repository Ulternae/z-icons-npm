import React from 'react';

export interface CoreShieldCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreShieldCheckSolid: React.FC<CoreShieldCheckSolidProps>;
export default CoreShieldCheckSolid;
