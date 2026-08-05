import React from 'react';

export interface LanRectangleVerticalHistoryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleVerticalHistory(props: LanRectangleVerticalHistoryProps): React.ReactElement;
export default LanRectangleVerticalHistory;
