import React from 'react';

export interface MinaBookXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBookXSolid(props: MinaBookXSolidProps): React.ReactElement;
export default MinaBookXSolid;
