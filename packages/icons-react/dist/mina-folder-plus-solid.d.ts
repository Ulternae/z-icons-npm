import React from 'react';

export interface MinaFolderPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFolderPlusSolid: React.FC<MinaFolderPlusSolidProps>;
export default MinaFolderPlusSolid;
