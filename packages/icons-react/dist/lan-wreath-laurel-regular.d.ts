import React from 'react';

export interface LanWreathLaurelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWreathLaurelRegular: React.FC<LanWreathLaurelRegularProps>;
export default LanWreathLaurelRegular;
