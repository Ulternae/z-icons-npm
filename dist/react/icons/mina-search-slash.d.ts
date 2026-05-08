import React from 'react';

export interface MinaSearchSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSearchSlash: React.FC<MinaSearchSlashProps>;
export default MinaSearchSlash;
