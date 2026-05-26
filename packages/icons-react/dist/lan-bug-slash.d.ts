import React from 'react';

export interface LanBugSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBugSlash: React.FC<LanBugSlashProps>;
export default LanBugSlash;
