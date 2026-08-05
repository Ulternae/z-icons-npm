import React from 'react';

export interface LanGifThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGifThin(props: LanGifThinProps): React.ReactElement;
export default LanGifThin;
