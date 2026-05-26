import React from 'react';

export interface LanShowerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShower: React.FC<LanShowerProps>;
export default LanShower;
