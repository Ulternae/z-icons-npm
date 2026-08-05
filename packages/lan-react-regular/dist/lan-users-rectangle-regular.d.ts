import React from 'react';

export interface LanUsersRectangleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUsersRectangleRegular(props: LanUsersRectangleRegularProps): React.ReactElement;
export default LanUsersRectangleRegular;
