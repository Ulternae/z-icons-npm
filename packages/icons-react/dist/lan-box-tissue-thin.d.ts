import React from 'react';

export interface LanBoxTissueThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxTissueThin: React.FC<LanBoxTissueThinProps>;
export default LanBoxTissueThin;
