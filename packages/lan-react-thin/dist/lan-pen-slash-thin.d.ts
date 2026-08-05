import React from 'react';

export interface LanPenSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenSlashThin(props: LanPenSlashThinProps): React.ReactElement;
export default LanPenSlashThin;
