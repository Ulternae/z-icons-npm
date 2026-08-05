import React from 'react';

export interface LanGiftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGiftSolid(props: LanGiftSolidProps): React.ReactElement;
export default LanGiftSolid;
