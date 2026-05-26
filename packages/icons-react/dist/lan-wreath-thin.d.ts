import React from 'react';

export interface LanWreathThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWreathThin: React.FC<LanWreathThinProps>;
export default LanWreathThin;
