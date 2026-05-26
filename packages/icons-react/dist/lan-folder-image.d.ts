import React from 'react';

export interface LanFolderImageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFolderImage: React.FC<LanFolderImageProps>;
export default LanFolderImage;
