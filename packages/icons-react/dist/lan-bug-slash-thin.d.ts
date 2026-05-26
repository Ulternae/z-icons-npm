import React from 'react';

export interface LanBugSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBugSlashThin: React.FC<LanBugSlashThinProps>;
export default LanBugSlashThin;
