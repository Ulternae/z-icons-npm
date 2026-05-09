import React from 'react';

export interface MinaShieldSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaShieldSolid: React.FC<MinaShieldSolidProps>;
export default MinaShieldSolid;
