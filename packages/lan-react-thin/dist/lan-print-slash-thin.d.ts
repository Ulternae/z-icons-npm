import React from 'react';

export interface LanPrintSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPrintSlashThin(props: LanPrintSlashThinProps): React.ReactElement;
export default LanPrintSlashThin;
