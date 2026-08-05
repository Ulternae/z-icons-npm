import React from 'react';

export interface LanGiftsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGiftsRegular(props: LanGiftsRegularProps): React.ReactElement;
export default LanGiftsRegular;
