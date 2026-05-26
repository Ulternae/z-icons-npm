import React from 'react';

export interface LanHandFistProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandFist: React.FC<LanHandFistProps>;
export default LanHandFist;
