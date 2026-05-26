import React from 'react';

export interface LanGridDividersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGridDividersSolid: React.FC<LanGridDividersSolidProps>;
export default LanGridDividersSolid;
