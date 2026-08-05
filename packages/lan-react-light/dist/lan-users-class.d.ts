import React from 'react';

export interface LanUsersClassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUsersClass(props: LanUsersClassProps): React.ReactElement;
export default LanUsersClass;
