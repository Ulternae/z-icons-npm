import React from 'react';

export interface LanFoldersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFoldersSolid(props: LanFoldersSolidProps): React.ReactElement;
export default LanFoldersSolid;
