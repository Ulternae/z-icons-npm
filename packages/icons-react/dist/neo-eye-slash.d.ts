import React from 'react';

export interface NeoEyeSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoEyeSlash: React.FC<NeoEyeSlashProps>;
export default NeoEyeSlash;
