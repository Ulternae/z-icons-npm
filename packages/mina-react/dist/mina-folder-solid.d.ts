import React from 'react';

export interface MinaFolderSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFolderSolid(props: MinaFolderSolidProps): React.ReactElement;
export default MinaFolderSolid;
