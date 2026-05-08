import React from 'react';

export interface MinaFolderSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFolderSlash: React.FC<MinaFolderSlashProps>;
export default MinaFolderSlash;
