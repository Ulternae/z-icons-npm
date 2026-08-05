import React from 'react';

export interface LanFileSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileSlashSolid(props: LanFileSlashSolidProps): React.ReactElement;
export default LanFileSlashSolid;
