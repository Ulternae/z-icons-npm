import React from 'react';

export interface LanSmogProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSmog: React.FC<LanSmogProps>;
export default LanSmog;
