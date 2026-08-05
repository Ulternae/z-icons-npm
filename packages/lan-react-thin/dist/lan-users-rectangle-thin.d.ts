import React from 'react';

export interface LanUsersRectangleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUsersRectangleThin(props: LanUsersRectangleThinProps): React.ReactElement;
export default LanUsersRectangleThin;
