import React from 'react';

export interface LanVideoSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVideoSlash: React.FC<LanVideoSlashProps>;
export default LanVideoSlash;
