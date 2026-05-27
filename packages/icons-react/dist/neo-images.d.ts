import React from 'react';

export interface NeoImagesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoImages: React.FC<NeoImagesProps>;
export default NeoImages;
