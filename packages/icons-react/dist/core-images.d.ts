import React from 'react';

export interface CoreImagesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreImages: React.FC<CoreImagesProps>;
export default CoreImages;
