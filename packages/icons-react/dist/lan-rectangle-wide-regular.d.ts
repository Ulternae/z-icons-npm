import React from 'react';

export interface LanRectangleWideRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleWideRegular: React.FC<LanRectangleWideRegularProps>;
export default LanRectangleWideRegular;
