import React from 'react';

export interface NeoFolderSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFolderSolid: React.FC<NeoFolderSolidProps>;
export default NeoFolderSolid;
