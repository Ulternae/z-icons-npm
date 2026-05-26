import React from 'react';

export interface LanBinarySlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBinarySlash: React.FC<LanBinarySlashProps>;
export default LanBinarySlash;
