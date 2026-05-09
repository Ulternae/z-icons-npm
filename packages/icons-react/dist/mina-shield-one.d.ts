import React from 'react';

export interface MinaShieldOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaShieldOne: React.FC<MinaShieldOneProps>;
export default MinaShieldOne;
