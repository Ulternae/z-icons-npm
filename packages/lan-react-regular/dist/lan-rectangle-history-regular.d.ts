import React from 'react';

export interface LanRectangleHistoryRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleHistoryRegular(props: LanRectangleHistoryRegularProps): React.ReactElement;
export default LanRectangleHistoryRegular;
