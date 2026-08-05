import React from 'react';

export interface LanSnakeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSnakeThin(props: LanSnakeThinProps): React.ReactElement;
export default LanSnakeThin;
