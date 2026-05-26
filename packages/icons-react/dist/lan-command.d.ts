import React from 'react';

export interface LanCommandProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommand: React.FC<LanCommandProps>;
export default LanCommand;
