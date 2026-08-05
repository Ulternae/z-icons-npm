import React from 'react';

export interface LanPenSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenSlashSolid(props: LanPenSlashSolidProps): React.ReactElement;
export default LanPenSlashSolid;
