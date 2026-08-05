import React from 'react';

export interface LanPaintbrushSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPaintbrushSlashThin(props: LanPaintbrushSlashThinProps): React.ReactElement;
export default LanPaintbrushSlashThin;
