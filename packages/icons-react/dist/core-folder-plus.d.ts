import React from 'react';

export interface CoreFolderPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFolderPlus: React.FC<CoreFolderPlusProps>;
export default CoreFolderPlus;
