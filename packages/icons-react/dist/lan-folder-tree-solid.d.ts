import React from 'react';

export interface LanFolderTreeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderTreeSolid: React.FC<LanFolderTreeSolidProps>;
export default LanFolderTreeSolid;
