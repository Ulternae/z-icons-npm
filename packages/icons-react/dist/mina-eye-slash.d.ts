import React from 'react';

export interface MinaEyeSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEyeSlash: React.FC<MinaEyeSlashProps>;
export default MinaEyeSlash;
