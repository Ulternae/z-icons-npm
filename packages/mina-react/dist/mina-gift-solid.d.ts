import React from 'react';

export interface MinaGiftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaGiftSolid(props: MinaGiftSolidProps): React.ReactElement;
export default MinaGiftSolid;
