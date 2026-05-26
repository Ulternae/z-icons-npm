import React from 'react';

export interface LanFoldersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolders: React.FC<LanFoldersProps>;
export default LanFolders;
