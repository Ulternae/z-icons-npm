import React from 'react';

export interface LanApertureRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanApertureRegular: React.FC<LanApertureRegularProps>;
export default LanApertureRegular;
