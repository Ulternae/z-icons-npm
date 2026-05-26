import React from 'react';

export interface LanEyesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEyes: React.FC<LanEyesProps>;
export default LanEyes;
