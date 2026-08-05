import React from 'react';

export interface MinaCornerUpLeftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCornerUpLeftSolid(props: MinaCornerUpLeftSolidProps): React.ReactElement;
export default MinaCornerUpLeftSolid;
