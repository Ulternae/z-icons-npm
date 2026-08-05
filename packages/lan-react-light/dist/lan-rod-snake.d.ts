import React from 'react';

export interface LanRodSnakeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRodSnake(props: LanRodSnakeProps): React.ReactElement;
export default LanRodSnake;
