import React from 'react';

export interface LanRectangleHistoryRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectangleHistoryRegular: React.FC<LanRectangleHistoryRegularProps>;
export default LanRectangleHistoryRegular;
