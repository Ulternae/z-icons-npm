import React from 'react';

export interface CoreFoldersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFolders: React.FC<CoreFoldersProps>;
export default CoreFolders;
