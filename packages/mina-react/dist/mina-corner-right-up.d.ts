import React from 'react';

export interface MinaCornerRightUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCornerRightUp(props: MinaCornerRightUpProps): React.ReactElement;
export default MinaCornerRightUp;
