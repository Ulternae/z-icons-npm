import React from 'react';

export interface LanPenFancySlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenFancySlash(props: LanPenFancySlashProps): React.ReactElement;
export default LanPenFancySlash;
