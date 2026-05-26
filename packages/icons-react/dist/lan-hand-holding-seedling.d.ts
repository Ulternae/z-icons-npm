import React from 'react';

export interface LanHandHoldingSeedlingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandHoldingSeedling: React.FC<LanHandHoldingSeedlingProps>;
export default LanHandHoldingSeedling;
