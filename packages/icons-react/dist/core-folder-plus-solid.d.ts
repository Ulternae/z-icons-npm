import React from 'react';

export interface CoreFolderPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFolderPlusSolid: React.FC<CoreFolderPlusSolidProps>;
export default CoreFolderPlusSolid;
