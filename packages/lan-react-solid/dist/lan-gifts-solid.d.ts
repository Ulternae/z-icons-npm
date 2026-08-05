import React from 'react';

export interface LanGiftsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGiftsSolid(props: LanGiftsSolidProps): React.ReactElement;
export default LanGiftsSolid;
