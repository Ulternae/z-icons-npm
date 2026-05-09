import React from 'react';

export interface MinaVideoSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaVideoSlash: React.FC<MinaVideoSlashProps>;
export default MinaVideoSlash;
