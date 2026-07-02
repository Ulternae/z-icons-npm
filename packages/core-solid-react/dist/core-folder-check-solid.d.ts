import React from 'react';

export interface CoreFolderCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFolderCheckSolid(props: CoreFolderCheckSolidProps): React.ReactElement;
export default CoreFolderCheckSolid;
