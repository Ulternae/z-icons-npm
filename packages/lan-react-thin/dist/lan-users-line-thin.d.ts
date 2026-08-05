import React from 'react';

export interface LanUsersLineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUsersLineThin(props: LanUsersLineThinProps): React.ReactElement;
export default LanUsersLineThin;
