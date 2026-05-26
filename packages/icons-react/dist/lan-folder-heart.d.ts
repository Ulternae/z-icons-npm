import React from 'react';

export interface LanFolderHeartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderHeart: React.FC<LanFolderHeartProps>;
export default LanFolderHeart;
