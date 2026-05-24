import React from 'react';

export interface BruGripfireProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruGripfire: React.FC<BruGripfireProps>;
export default BruGripfire;
