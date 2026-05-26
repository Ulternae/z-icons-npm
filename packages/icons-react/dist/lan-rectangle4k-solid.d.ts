import React from 'react';

export interface LanRectangle4kSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangle4kSolid: React.FC<LanRectangle4kSolidProps>;
export default LanRectangle4kSolid;
