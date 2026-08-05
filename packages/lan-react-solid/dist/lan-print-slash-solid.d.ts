import React from 'react';

export interface LanPrintSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPrintSlashSolid(props: LanPrintSlashSolidProps): React.ReactElement;
export default LanPrintSlashSolid;
