import React from 'react';

export interface LanFolderTreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderTree(props: LanFolderTreeProps): React.ReactElement;
export default LanFolderTree;
