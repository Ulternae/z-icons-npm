import React from 'react';

export interface MinaFolderXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFolderX(props: MinaFolderXProps): React.ReactElement;
export default MinaFolderX;
