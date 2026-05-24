import React from 'react';

export interface BruCodepenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruCodepen: React.FC<BruCodepenProps>;
export default BruCodepen;
