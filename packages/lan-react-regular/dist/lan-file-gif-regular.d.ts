import React from 'react';

export interface LanFileGifRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileGifRegular(props: LanFileGifRegularProps): React.ReactElement;
export default LanFileGifRegular;
