import React from 'react';

export interface LanGiftCardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGiftCardRegular(props: LanGiftCardRegularProps): React.ReactElement;
export default LanGiftCardRegular;
