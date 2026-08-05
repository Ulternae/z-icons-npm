import React from 'react';

export interface LanFolderUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderUserSolid(props: LanFolderUserSolidProps): React.ReactElement;
export default LanFolderUserSolid;
