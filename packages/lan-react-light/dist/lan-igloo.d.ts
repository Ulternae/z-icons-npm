import React from 'react';

export interface LanIglooProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIgloo(props: LanIglooProps): React.ReactElement;
export default LanIgloo;
