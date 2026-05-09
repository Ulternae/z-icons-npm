import React from 'react';

export interface MinaFolderCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFolderCheck: React.FC<MinaFolderCheckProps>;
export default MinaFolderCheck;
