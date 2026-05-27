import React from 'react';

export interface NeoFolderProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFolder: React.FC<NeoFolderProps>;
export default NeoFolder;
