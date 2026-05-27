import React from 'react';

export interface CoreEyeSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreEyeSlash: React.FC<CoreEyeSlashProps>;
export default CoreEyeSlash;
