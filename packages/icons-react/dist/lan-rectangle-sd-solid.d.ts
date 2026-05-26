import React from 'react';

export interface LanRectangleSdSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleSdSolid: React.FC<LanRectangleSdSolidProps>;
export default LanRectangleSdSolid;
