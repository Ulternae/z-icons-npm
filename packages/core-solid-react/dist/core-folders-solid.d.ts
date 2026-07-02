import React from 'react';

export interface CoreFoldersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFoldersSolid(props: CoreFoldersSolidProps): React.ReactElement;
export default CoreFoldersSolid;
