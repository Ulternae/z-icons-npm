import React from 'react';

export interface LanRectangleHistoryThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleHistoryThin(props: LanRectangleHistoryThinProps): React.ReactElement;
export default LanRectangleHistoryThin;
