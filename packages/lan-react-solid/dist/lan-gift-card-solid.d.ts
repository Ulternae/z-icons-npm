import React from 'react';

export interface LanGiftCardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGiftCardSolid(props: LanGiftCardSolidProps): React.ReactElement;
export default LanGiftCardSolid;
