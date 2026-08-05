import React from 'react';

export interface MinaCornerUpRightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCornerUpRightSolid(props: MinaCornerUpRightSolidProps): React.ReactElement;
export default MinaCornerUpRightSolid;
