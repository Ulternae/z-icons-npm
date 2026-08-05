import React from 'react';

export interface LanBananaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBanana(props: LanBananaProps): React.ReactElement;
export default LanBanana;
