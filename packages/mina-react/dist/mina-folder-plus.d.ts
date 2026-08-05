import React from 'react';

export interface MinaFolderPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFolderPlus(props: MinaFolderPlusProps): React.ReactElement;
export default MinaFolderPlus;
