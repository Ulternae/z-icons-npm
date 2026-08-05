import React from 'react';

export interface MinaBookSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBookSolid(props: MinaBookSolidProps): React.ReactElement;
export default MinaBookSolid;
