import React from 'react';

export interface MinaBookSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBookSlash: React.FC<MinaBookSlashProps>;
export default MinaBookSlash;
