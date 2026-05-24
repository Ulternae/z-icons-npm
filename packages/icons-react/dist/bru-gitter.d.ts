import React from 'react';

export interface BruGitterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruGitter: React.FC<BruGitterProps>;
export default BruGitter;
