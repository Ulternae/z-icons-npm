import React from 'react';

export interface CoreFolderProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFolder: React.FC<CoreFolderProps>;
export default CoreFolder;
