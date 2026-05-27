import React from 'react';

export interface NeoFoldersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFolders: React.FC<NeoFoldersProps>;
export default NeoFolders;
