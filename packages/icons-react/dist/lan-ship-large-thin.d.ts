import React from 'react';

export interface LanShipLargeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShipLargeThin: React.FC<LanShipLargeThinProps>;
export default LanShipLargeThin;
