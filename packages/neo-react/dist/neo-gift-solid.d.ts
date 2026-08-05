import React from 'react';

export interface NeoGiftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoGiftSolid(props: NeoGiftSolidProps): React.ReactElement;
export default NeoGiftSolid;
