import React from 'react';

export interface BruPatreonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruPatreon: React.FC<BruPatreonProps>;
export default BruPatreon;
