import React from 'react';

export interface MinaFolderOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFolderOne(props: MinaFolderOneProps): React.ReactElement;
export default MinaFolderOne;
