import React from 'react';

export interface CoreFolderCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFolderCheckSolid: React.FC<CoreFolderCheckSolidProps>;
export default CoreFolderCheckSolid;
