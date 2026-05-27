import React from 'react';

export interface CoreBugProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreBug: React.FC<CoreBugProps>;
export default CoreBug;
