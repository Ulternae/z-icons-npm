import React from 'react';

export interface MinaShieldCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaShieldCheckSolid: React.FC<MinaShieldCheckSolidProps>;
export default MinaShieldCheckSolid;
