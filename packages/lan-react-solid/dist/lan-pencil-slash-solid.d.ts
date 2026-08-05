import React from 'react';

export interface LanPencilSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPencilSlashSolid(props: LanPencilSlashSolidProps): React.ReactElement;
export default LanPencilSlashSolid;
