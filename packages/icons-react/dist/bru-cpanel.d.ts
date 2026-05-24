import React from 'react';

export interface BruCpanelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruCpanel: React.FC<BruCpanelProps>;
export default BruCpanel;
