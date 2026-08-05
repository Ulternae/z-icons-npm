import React from 'react';

export interface LanFileImageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileImage(props: LanFileImageProps): React.ReactElement;
export default LanFileImage;
