import React from 'react';

export interface LanHandcuffsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandcuffsRegular: React.FC<LanHandcuffsRegularProps>;
export default LanHandcuffsRegular;
