import React from 'react';

export interface LanSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSlashSolid(props: LanSlashSolidProps): React.ReactElement;
export default LanSlashSolid;
