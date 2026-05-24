import React from 'react';

export interface BruSimplybuiltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSimplybuilt: React.FC<BruSimplybuiltProps>;
export default BruSimplybuilt;
