import React from 'react';

export interface BruKickstarterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruKickstarter: React.FC<BruKickstarterProps>;
export default BruKickstarter;
