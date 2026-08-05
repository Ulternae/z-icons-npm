import React from 'react';

export interface LanRectangleHistoryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleHistory(props: LanRectangleHistoryProps): React.ReactElement;
export default LanRectangleHistory;
