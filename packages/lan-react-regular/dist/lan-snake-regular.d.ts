import React from 'react';

export interface LanSnakeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSnakeRegular(props: LanSnakeRegularProps): React.ReactElement;
export default LanSnakeRegular;
