import React from 'react';

export interface MinaImageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaImage(props: MinaImageProps): React.ReactElement;
export default MinaImage;
