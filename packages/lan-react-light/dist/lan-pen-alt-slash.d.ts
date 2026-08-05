import React from 'react';

export interface LanPenAltSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenAltSlash(props: LanPenAltSlashProps): React.ReactElement;
export default LanPenAltSlash;
