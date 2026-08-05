import React from 'react';

export interface NeoFolderProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoFolder(props: NeoFolderProps): React.ReactElement;
export default NeoFolder;
