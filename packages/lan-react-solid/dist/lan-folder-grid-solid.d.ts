import React from 'react';

export interface LanFolderGridSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderGridSolid(props: LanFolderGridSolidProps): React.ReactElement;
export default LanFolderGridSolid;
