import React from 'react';

export interface LanLeafMapleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLeafMaple(props: LanLeafMapleProps): React.ReactElement;
export default LanLeafMaple;
