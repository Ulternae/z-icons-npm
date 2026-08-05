import React from 'react';

export interface MinaFolderSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFolderSlash(props: MinaFolderSlashProps): React.ReactElement;
export default MinaFolderSlash;
