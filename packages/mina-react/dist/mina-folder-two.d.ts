import React from 'react';

export interface MinaFolderTwoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFolderTwo(props: MinaFolderTwoProps): React.ReactElement;
export default MinaFolderTwo;
