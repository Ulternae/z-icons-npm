import React from 'react';

export interface CoreBugSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBugSlash: React.FC<CoreBugSlashProps>;
export default CoreBugSlash;
