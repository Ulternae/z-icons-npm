import React from 'react';

export interface LanEclipseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEclipse: React.FC<LanEclipseProps>;
export default LanEclipse;
