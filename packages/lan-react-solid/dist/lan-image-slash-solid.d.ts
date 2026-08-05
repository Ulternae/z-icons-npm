import React from 'react';

export interface LanImageSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImageSlashSolid(props: LanImageSlashSolidProps): React.ReactElement;
export default LanImageSlashSolid;
