import React from 'react';

export interface MinaFolderProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFolder: React.FC<MinaFolderProps>;
export default MinaFolder;
