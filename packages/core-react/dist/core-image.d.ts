import React from 'react';

export interface CoreImageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreImage(props: CoreImageProps): React.ReactElement;
export default CoreImage;
