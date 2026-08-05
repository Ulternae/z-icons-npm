import React from 'react';

export interface LanCircleShekelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleShekel(props: LanCircleShekelProps): React.ReactElement;
export default LanCircleShekel;
