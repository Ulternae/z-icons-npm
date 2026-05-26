import React from 'react';

export interface LanFolderBlankSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderBlankSolid: React.FC<LanFolderBlankSolidProps>;
export default LanFolderBlankSolid;
