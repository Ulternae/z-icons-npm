import React from 'react';

export interface LanBugSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBugSlashThin(props: LanBugSlashThinProps): React.ReactElement;
export default LanBugSlashThin;
