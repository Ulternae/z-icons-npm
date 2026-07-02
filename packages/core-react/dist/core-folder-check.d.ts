import React from 'react';

export interface CoreFolderCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFolderCheck(props: CoreFolderCheckProps): React.ReactElement;
export default CoreFolderCheck;
