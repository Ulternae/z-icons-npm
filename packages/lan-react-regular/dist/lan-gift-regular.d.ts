import React from 'react';

export interface LanGiftRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGiftRegular(props: LanGiftRegularProps): React.ReactElement;
export default LanGiftRegular;
