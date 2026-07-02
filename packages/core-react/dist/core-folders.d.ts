import React from 'react';

export interface CoreFoldersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFolders(props: CoreFoldersProps): React.ReactElement;
export default CoreFolders;
