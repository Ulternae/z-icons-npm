import React from 'react';

export interface MinaCornerUpLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCornerUpLeft(props: MinaCornerUpLeftProps): React.ReactElement;
export default MinaCornerUpLeft;
