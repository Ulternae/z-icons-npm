import React from 'react';

export interface MinaFolderOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFolderOneSolid: React.FC<MinaFolderOneSolidProps>;
export default MinaFolderOneSolid;
