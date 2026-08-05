import React from 'react';

export interface LanImagesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImages(props: LanImagesProps): React.ReactElement;
export default LanImages;
