import React from 'react';

export interface LanGiftsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGifts(props: LanGiftsProps): React.ReactElement;
export default LanGifts;
