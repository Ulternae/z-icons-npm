import React from 'react';

export interface LanGifRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGifRegular(props: LanGifRegularProps): React.ReactElement;
export default LanGifRegular;
