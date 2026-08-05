import React from 'react';

export interface MinaFolderPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFolderPlusSolid(props: MinaFolderPlusSolidProps): React.ReactElement;
export default MinaFolderPlusSolid;
