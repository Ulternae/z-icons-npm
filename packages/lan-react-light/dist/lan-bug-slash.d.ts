import React from 'react';

export interface LanBugSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBugSlash(props: LanBugSlashProps): React.ReactElement;
export default LanBugSlash;
