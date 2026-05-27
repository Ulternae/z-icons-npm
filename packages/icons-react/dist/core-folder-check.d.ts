import React from 'react';

export interface CoreFolderCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFolderCheck: React.FC<CoreFolderCheckProps>;
export default CoreFolderCheck;
