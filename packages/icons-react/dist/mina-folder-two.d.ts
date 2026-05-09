import React from 'react';

export interface MinaFolderTwoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFolderTwo: React.FC<MinaFolderTwoProps>;
export default MinaFolderTwo;
