import React from 'react';

export interface LanFolderMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFolderMinusSolid(props: LanFolderMinusSolidProps): React.ReactElement;
export default LanFolderMinusSolid;
