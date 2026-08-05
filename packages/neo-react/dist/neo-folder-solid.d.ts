import React from 'react';

export interface NeoFolderSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoFolderSolid(props: NeoFolderSolidProps): React.ReactElement;
export default NeoFolderSolid;
