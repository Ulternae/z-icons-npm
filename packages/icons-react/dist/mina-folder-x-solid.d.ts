import React from 'react';

export interface MinaFolderXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFolderXSolid: React.FC<MinaFolderXSolidProps>;
export default MinaFolderXSolid;
