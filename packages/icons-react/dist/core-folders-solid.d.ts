import React from 'react';

export interface CoreFoldersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFoldersSolid: React.FC<CoreFoldersSolidProps>;
export default CoreFoldersSolid;
