import React from 'react';

export interface LanFileGifProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileGif(props: LanFileGifProps): React.ReactElement;
export default LanFileGif;
