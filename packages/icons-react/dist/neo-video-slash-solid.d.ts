import React from 'react';

export interface NeoVideoSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoVideoSlashSolid: React.FC<NeoVideoSlashSolidProps>;
export default NeoVideoSlashSolid;
