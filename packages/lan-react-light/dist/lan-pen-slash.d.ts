import React from 'react';

export interface LanPenSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenSlash(props: LanPenSlashProps): React.ReactElement;
export default LanPenSlash;
