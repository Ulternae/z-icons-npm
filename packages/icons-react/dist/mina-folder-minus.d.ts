import React from 'react';

export interface MinaFolderMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFolderMinus: React.FC<MinaFolderMinusProps>;
export default MinaFolderMinus;
