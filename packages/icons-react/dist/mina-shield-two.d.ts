import React from 'react';

export interface MinaShieldTwoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaShieldTwo: React.FC<MinaShieldTwoProps>;
export default MinaShieldTwo;
