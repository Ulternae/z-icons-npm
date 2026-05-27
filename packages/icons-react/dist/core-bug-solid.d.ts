import React from 'react';

export interface CoreBugSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBugSolid: React.FC<CoreBugSolidProps>;
export default CoreBugSolid;
