import React from 'react';

export interface LanFolderTimesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderTimesSolid: React.FC<LanFolderTimesSolidProps>;
export default LanFolderTimesSolid;
