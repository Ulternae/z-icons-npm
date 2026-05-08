import React from 'react';

export interface MinaFolderCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFolderCheckSolid: React.FC<MinaFolderCheckSolidProps>;
export default MinaFolderCheckSolid;
