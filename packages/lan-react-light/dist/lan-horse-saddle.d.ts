import React from 'react';

export interface LanHorseSaddleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHorseSaddle(props: LanHorseSaddleProps): React.ReactElement;
export default LanHorseSaddle;
