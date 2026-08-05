import React from 'react';

export interface LanRectangleVerticalHistoryRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleVerticalHistoryRegular(props: LanRectangleVerticalHistoryRegularProps): React.ReactElement;
export default LanRectangleVerticalHistoryRegular;
