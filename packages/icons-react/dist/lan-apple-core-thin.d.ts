import React from 'react';

export interface LanAppleCoreThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAppleCoreThin: React.FC<LanAppleCoreThinProps>;
export default LanAppleCoreThin;
