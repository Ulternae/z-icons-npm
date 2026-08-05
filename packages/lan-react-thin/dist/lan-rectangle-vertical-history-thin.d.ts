import React from 'react';

export interface LanRectangleVerticalHistoryThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleVerticalHistoryThin(props: LanRectangleVerticalHistoryThinProps): React.ReactElement;
export default LanRectangleVerticalHistoryThin;
