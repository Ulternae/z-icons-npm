import React from 'react';

export interface LanTintSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTintSlash(props: LanTintSlashProps): React.ReactElement;
export default LanTintSlash;
