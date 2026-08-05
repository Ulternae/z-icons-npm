import React from 'react';

export interface NeoImagesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoImages(props: NeoImagesProps): React.ReactElement;
export default NeoImages;
