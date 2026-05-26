import React from 'react';

export interface LanFolderPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderPlusSolid: React.FC<LanFolderPlusSolidProps>;
export default LanFolderPlusSolid;
