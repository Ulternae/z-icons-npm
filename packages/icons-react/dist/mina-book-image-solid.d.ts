import React from 'react';

export interface MinaBookImageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBookImageSolid: React.FC<MinaBookImageSolidProps>;
export default MinaBookImageSolid;
