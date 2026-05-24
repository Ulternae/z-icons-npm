import React from 'react';

export interface BruGuildedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruGuilded: React.FC<BruGuildedProps>;
export default BruGuilded;
