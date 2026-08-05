import React from 'react';

export interface LanFolderOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderOpenSolid(props: LanFolderOpenSolidProps): React.ReactElement;
export default LanFolderOpenSolid;
