import React from 'react';

export interface LanGifProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGif(props: LanGifProps): React.ReactElement;
export default LanGif;
