import React from 'react';

export interface LanFolderTreeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderTreeSolid(props: LanFolderTreeSolidProps): React.ReactElement;
export default LanFolderTreeSolid;
