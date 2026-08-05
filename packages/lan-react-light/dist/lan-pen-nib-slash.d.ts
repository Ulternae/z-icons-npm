import React from 'react';

export interface LanPenNibSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenNibSlash(props: LanPenNibSlashProps): React.ReactElement;
export default LanPenNibSlash;
