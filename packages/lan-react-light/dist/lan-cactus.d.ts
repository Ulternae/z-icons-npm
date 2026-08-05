import React from 'react';

export interface LanCactusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCactus(props: LanCactusProps): React.ReactElement;
export default LanCactus;
