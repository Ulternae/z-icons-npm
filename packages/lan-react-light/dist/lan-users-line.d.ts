import React from 'react';

export interface LanUsersLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUsersLine(props: LanUsersLineProps): React.ReactElement;
export default LanUsersLine;
