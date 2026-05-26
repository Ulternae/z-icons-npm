import React from 'react';

export interface LanFolderOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderOpenSolid: React.FC<LanFolderOpenSolidProps>;
export default LanFolderOpenSolid;
