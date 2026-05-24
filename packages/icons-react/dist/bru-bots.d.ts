import React from 'react';

export interface BruBotsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruBots: React.FC<BruBotsProps>;
export default BruBots;
