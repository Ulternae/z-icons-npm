import React from 'react';

export interface MinaUnlinkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaUnlink: React.FC<MinaUnlinkProps>;
export default MinaUnlink;
