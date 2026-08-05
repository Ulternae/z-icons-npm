import React from 'react';

export interface LanFolderCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderCheckSolid(props: LanFolderCheckSolidProps): React.ReactElement;
export default LanFolderCheckSolid;
