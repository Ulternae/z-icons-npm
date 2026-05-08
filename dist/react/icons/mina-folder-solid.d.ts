import React from 'react';

export interface MinaFolderSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFolderSolid: React.FC<MinaFolderSolidProps>;
export default MinaFolderSolid;
