import React from 'react';

export interface LanDownToDottedLineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDownToDottedLineSolid: React.FC<LanDownToDottedLineSolidProps>;
export default LanDownToDottedLineSolid;
