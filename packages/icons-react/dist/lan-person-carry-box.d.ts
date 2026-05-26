import React from 'react';

export interface LanPersonCarryBoxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonCarryBox: React.FC<LanPersonCarryBoxProps>;
export default LanPersonCarryBox;
