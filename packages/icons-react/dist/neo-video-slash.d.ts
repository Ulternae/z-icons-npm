import React from 'react';

export interface NeoVideoSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoVideoSlash: React.FC<NeoVideoSlashProps>;
export default NeoVideoSlash;
