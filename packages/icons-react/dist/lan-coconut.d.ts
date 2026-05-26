import React from 'react';

export interface LanCoconutProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCoconut: React.FC<LanCoconutProps>;
export default LanCoconut;
