import React from 'react';

export interface CoreBombProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreBomb(props: CoreBombProps): React.ReactElement;
export default CoreBomb;
