import React from 'react';

export interface LanFolderTreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderTree: React.FC<LanFolderTreeProps>;
export default LanFolderTree;
