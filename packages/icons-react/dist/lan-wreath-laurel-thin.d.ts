import React from 'react';

export interface LanWreathLaurelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWreathLaurelThin: React.FC<LanWreathLaurelThinProps>;
export default LanWreathLaurelThin;
