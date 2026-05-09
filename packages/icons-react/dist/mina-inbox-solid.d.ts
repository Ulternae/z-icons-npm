import React from 'react';

export interface MinaInboxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaInboxSolid: React.FC<MinaInboxSolidProps>;
export default MinaInboxSolid;
