import React from 'react';

export interface MinaCornerDownRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCornerDownRight(props: MinaCornerDownRightProps): React.ReactElement;
export default MinaCornerDownRight;
