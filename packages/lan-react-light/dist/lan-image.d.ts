import React from 'react';

export interface LanImageProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImage(props: LanImageProps): React.ReactElement;
export default LanImage;
