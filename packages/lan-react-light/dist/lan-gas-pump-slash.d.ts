import React from 'react';

export interface LanGasPumpSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGasPumpSlash(props: LanGasPumpSlashProps): React.ReactElement;
export default LanGasPumpSlash;
