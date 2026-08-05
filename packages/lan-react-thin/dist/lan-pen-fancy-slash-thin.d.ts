import React from 'react';

export interface LanPenFancySlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenFancySlashThin(props: LanPenFancySlashThinProps): React.ReactElement;
export default LanPenFancySlashThin;
