import React from 'react';

export interface MinaFolderHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFolderHeart: React.FC<MinaFolderHeartProps>;
export default MinaFolderHeart;
