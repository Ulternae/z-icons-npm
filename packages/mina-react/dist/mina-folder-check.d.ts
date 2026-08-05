import React from 'react';

export interface MinaFolderCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFolderCheck(props: MinaFolderCheckProps): React.ReactElement;
export default MinaFolderCheck;
