import React from 'react';

export interface MinaFolderPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFolderPlus: React.FC<MinaFolderPlusProps>;
export default MinaFolderPlus;
