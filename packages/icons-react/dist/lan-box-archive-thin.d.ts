import React from 'react';

export interface LanBoxArchiveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxArchiveThin: React.FC<LanBoxArchiveThinProps>;
export default LanBoxArchiveThin;
