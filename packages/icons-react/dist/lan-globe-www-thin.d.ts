import React from 'react';

export interface LanGlobeWwwThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlobeWwwThin: React.FC<LanGlobeWwwThinProps>;
export default LanGlobeWwwThin;
