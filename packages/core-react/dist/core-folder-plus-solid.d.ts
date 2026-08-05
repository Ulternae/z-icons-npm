import React from 'react';

export interface CoreFolderPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFolderPlusSolid(props: CoreFolderPlusSolidProps): React.ReactElement;
export default CoreFolderPlusSolid;
