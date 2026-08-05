import React from 'react';

export interface MinaBookImageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBookImageSolid(props: MinaBookImageSolidProps): React.ReactElement;
export default MinaBookImageSolid;
