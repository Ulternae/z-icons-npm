import React from 'react';

export interface LanBombProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBomb(props: LanBombProps): React.ReactElement;
export default LanBomb;
