import React from 'react';

export interface NeoImageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoImage(props: NeoImageProps): React.ReactElement;
export default NeoImage;
