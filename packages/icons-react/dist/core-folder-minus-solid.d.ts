import React from 'react';

export interface CoreFolderMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFolderMinusSolid: React.FC<CoreFolderMinusSolidProps>;
export default CoreFolderMinusSolid;
