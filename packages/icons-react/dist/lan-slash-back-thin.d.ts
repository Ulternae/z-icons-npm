import React from 'react';

export interface LanSlashBackThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSlashBackThin: React.FC<LanSlashBackThinProps>;
export default LanSlashBackThin;
