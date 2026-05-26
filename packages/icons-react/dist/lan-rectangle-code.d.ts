import React from 'react';

export interface LanRectangleCodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleCode: React.FC<LanRectangleCodeProps>;
export default LanRectangleCode;
