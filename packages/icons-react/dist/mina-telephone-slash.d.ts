import React from 'react';

export interface MinaTelephoneSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTelephoneSlash: React.FC<MinaTelephoneSlashProps>;
export default MinaTelephoneSlash;
