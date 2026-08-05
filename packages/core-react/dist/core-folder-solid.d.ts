import React from 'react';

export interface CoreFolderSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFolderSolid(props: CoreFolderSolidProps): React.ReactElement;
export default CoreFolderSolid;
