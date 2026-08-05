import React from 'react';

export interface LanRectangleHistoryCircleUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleHistoryCircleUser(props: LanRectangleHistoryCircleUserProps): React.ReactElement;
export default LanRectangleHistoryCircleUser;
