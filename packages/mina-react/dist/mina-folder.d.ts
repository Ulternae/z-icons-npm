import React from 'react';

export interface MinaFolderProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFolder(props: MinaFolderProps): React.ReactElement;
export default MinaFolder;
