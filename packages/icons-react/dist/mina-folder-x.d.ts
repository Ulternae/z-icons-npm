import React from 'react';

export interface MinaFolderXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFolderX: React.FC<MinaFolderXProps>;
export default MinaFolderX;
