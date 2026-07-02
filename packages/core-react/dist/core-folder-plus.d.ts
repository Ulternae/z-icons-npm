import React from 'react';

export interface CoreFolderPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFolderPlus(props: CoreFolderPlusProps): React.ReactElement;
export default CoreFolderPlus;
