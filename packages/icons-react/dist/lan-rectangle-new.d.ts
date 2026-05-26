import React from 'react';

export interface LanRectangleNewProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleNew: React.FC<LanRectangleNewProps>;
export default LanRectangleNew;
