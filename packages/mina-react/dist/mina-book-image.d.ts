import React from 'react';

export interface MinaBookImageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBookImage(props: MinaBookImageProps): React.ReactElement;
export default MinaBookImage;
