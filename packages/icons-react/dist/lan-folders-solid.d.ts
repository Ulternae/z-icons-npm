import React from 'react';

export interface LanFoldersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFoldersSolid: React.FC<LanFoldersSolidProps>;
export default LanFoldersSolid;
