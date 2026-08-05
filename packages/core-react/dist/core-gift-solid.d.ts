import React from 'react';

export interface CoreGiftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreGiftSolid(props: CoreGiftSolidProps): React.ReactElement;
export default CoreGiftSolid;
