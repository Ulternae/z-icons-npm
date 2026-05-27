import React from 'react';

export interface NeoFoldersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFoldersSolid: React.FC<NeoFoldersSolidProps>;
export default NeoFoldersSolid;
