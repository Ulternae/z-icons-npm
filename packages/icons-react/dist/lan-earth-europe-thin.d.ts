import React from 'react';

export interface LanEarthEuropeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEarthEuropeThin: React.FC<LanEarthEuropeThinProps>;
export default LanEarthEuropeThin;
