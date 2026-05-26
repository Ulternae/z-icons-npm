import React from 'react';

export interface LanWindowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindow: React.FC<LanWindowProps>;
export default LanWindow;
