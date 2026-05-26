import React from 'react';

export interface LanFolderMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderMinusSolid: React.FC<LanFolderMinusSolidProps>;
export default LanFolderMinusSolid;
