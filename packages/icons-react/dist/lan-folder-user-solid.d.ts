import React from 'react';

export interface LanFolderUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderUserSolid: React.FC<LanFolderUserSolidProps>;
export default LanFolderUserSolid;
