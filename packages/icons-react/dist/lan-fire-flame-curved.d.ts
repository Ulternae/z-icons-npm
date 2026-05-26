import React from 'react';

export interface LanFireFlameCurvedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFireFlameCurved: React.FC<LanFireFlameCurvedProps>;
export default LanFireFlameCurved;
