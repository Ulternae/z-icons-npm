import React from 'react';

export interface LanFileGifThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileGifThin(props: LanFileGifThinProps): React.ReactElement;
export default LanFileGifThin;
