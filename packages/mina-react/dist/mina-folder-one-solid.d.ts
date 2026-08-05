import React from 'react';

export interface MinaFolderOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFolderOneSolid(props: MinaFolderOneSolidProps): React.ReactElement;
export default MinaFolderOneSolid;
