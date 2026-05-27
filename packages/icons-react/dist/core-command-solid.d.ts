import React from 'react';

export interface CoreCommandSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCommandSolid: React.FC<CoreCommandSolidProps>;
export default CoreCommandSolid;
