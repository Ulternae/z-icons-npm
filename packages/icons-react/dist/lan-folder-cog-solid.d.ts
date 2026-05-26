import React from 'react';

export interface LanFolderCogSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderCogSolid: React.FC<LanFolderCogSolidProps>;
export default LanFolderCogSolid;
