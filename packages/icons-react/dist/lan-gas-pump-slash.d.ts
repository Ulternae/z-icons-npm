import React from 'react';

export interface LanGasPumpSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGasPumpSlash: React.FC<LanGasPumpSlashProps>;
export default LanGasPumpSlash;
