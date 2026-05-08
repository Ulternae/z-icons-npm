import React from 'react';

export interface MinaFolderOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFolderOne: React.FC<MinaFolderOneProps>;
export default MinaFolderOne;
