import React from 'react';

export interface LanFolderGridSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderGridSolid: React.FC<LanFolderGridSolidProps>;
export default LanFolderGridSolid;
