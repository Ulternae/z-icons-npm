import React from 'react';

export interface LanFolderPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderPlusSolid(props: LanFolderPlusSolidProps): React.ReactElement;
export default LanFolderPlusSolid;
