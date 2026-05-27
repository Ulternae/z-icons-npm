import React from 'react';

export interface CoreBugSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBugSlashSolid: React.FC<CoreBugSlashSolidProps>;
export default CoreBugSlashSolid;
