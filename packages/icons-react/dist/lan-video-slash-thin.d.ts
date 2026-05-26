import React from 'react';

export interface LanVideoSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVideoSlashThin: React.FC<LanVideoSlashThinProps>;
export default LanVideoSlashThin;
