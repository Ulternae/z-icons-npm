import React from 'react';

export interface LanPaintbrushFineSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPaintbrushFineSlash(props: LanPaintbrushFineSlashProps): React.ReactElement;
export default LanPaintbrushFineSlash;
