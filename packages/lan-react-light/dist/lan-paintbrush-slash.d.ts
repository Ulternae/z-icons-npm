import React from 'react';

export interface LanPaintbrushSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPaintbrushSlash(props: LanPaintbrushSlashProps): React.ReactElement;
export default LanPaintbrushSlash;
