import React from 'react';

export interface MinaLinkTwoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLinkTwoSolid(props: MinaLinkTwoSolidProps): React.ReactElement;
export default MinaLinkTwoSolid;
