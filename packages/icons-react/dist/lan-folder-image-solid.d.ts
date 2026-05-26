import React from 'react';

export interface LanFolderImageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderImageSolid: React.FC<LanFolderImageSolidProps>;
export default LanFolderImageSolid;
