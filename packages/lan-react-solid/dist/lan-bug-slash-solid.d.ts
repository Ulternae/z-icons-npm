import React from 'react';

export interface LanBugSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBugSlashSolid(props: LanBugSlashSolidProps): React.ReactElement;
export default LanBugSlashSolid;
