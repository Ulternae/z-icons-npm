import React from 'react';

export interface LanPaintbrushSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPaintbrushSlashSolid(props: LanPaintbrushSlashSolidProps): React.ReactElement;
export default LanPaintbrushSlashSolid;
