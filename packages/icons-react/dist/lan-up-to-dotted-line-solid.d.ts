import React from 'react';

export interface LanUpToDottedLineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUpToDottedLineSolid: React.FC<LanUpToDottedLineSolidProps>;
export default LanUpToDottedLineSolid;
