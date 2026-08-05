import React from 'react';

export interface MinaBookDotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBookDotSolid(props: MinaBookDotSolidProps): React.ReactElement;
export default MinaBookDotSolid;
