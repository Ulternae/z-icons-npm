import React from 'react';

export interface LanUsersSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUsersSlash(props: LanUsersSlashProps): React.ReactElement;
export default LanUsersSlash;
