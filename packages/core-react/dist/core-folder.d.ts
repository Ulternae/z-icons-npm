import React from 'react';

export interface CoreFolderProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFolder(props: CoreFolderProps): React.ReactElement;
export default CoreFolder;
