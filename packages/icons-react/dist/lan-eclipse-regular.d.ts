import React from 'react';

export interface LanEclipseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEclipseRegular: React.FC<LanEclipseRegularProps>;
export default LanEclipseRegular;
