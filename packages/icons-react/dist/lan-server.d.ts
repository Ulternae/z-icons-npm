import React from 'react';

export interface LanServerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanServer: React.FC<LanServerProps>;
export default LanServer;
