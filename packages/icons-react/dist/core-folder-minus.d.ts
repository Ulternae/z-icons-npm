import React from 'react';

export interface CoreFolderMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFolderMinus: React.FC<CoreFolderMinusProps>;
export default CoreFolderMinus;
