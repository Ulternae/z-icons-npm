import React from 'react';

export interface LanOutletProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOutlet: React.FC<LanOutletProps>;
export default LanOutlet;
