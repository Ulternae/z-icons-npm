import React from 'react';

export interface LanClonePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClonePlus: React.FC<LanClonePlusProps>;
export default LanClonePlus;
