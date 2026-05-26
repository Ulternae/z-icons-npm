import React from 'react';

export interface LanPhonePlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPhonePlusRegular: React.FC<LanPhonePlusRegularProps>;
export default LanPhonePlusRegular;
