import React from 'react';

export interface LanRectangleVerticalHistoryRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleVerticalHistoryRegular: React.FC<LanRectangleVerticalHistoryRegularProps>;
export default LanRectangleVerticalHistoryRegular;
