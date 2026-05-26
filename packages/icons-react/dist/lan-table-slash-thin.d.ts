import React from 'react';

export interface LanTableSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableSlashThin: React.FC<LanTableSlashThinProps>;
export default LanTableSlashThin;
