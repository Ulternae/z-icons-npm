import React from 'react';

export interface NeoFoldersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoFolders(props: NeoFoldersProps): React.ReactElement;
export default NeoFolders;
