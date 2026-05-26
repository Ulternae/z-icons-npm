import React from 'react';

export interface LanFolderCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderCheckSolid: React.FC<LanFolderCheckSolidProps>;
export default LanFolderCheckSolid;
