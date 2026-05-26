import React from 'react';

export interface LanBellExclamationSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBellExclamationSolid: React.FC<LanBellExclamationSolidProps>;
export default LanBellExclamationSolid;
