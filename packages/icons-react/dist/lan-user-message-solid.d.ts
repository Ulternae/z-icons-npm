import React from 'react';

export interface LanUserMessageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserMessageSolid: React.FC<LanUserMessageSolidProps>;
export default LanUserMessageSolid;
