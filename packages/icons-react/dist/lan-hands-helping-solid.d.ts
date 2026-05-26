import React from 'react';

export interface LanHandsHelpingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandsHelpingSolid: React.FC<LanHandsHelpingSolidProps>;
export default LanHandsHelpingSolid;
