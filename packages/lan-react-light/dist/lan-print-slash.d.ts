import React from 'react';

export interface LanPrintSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPrintSlash(props: LanPrintSlashProps): React.ReactElement;
export default LanPrintSlash;
