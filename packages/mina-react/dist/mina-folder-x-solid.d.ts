import React from 'react';

export interface MinaFolderXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFolderXSolid(props: MinaFolderXSolidProps): React.ReactElement;
export default MinaFolderXSolid;
