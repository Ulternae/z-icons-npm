import React from 'react';

export interface LanHandcuffsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandcuffs: React.FC<LanHandcuffsProps>;
export default LanHandcuffs;
