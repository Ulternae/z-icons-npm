import React from 'react';

export interface LanUsersRectangleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUsersRectangle(props: LanUsersRectangleProps): React.ReactElement;
export default LanUsersRectangle;
