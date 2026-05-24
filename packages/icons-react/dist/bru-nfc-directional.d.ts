import React from 'react';

export interface BruNfcDirectionalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruNfcDirectional: React.FC<BruNfcDirectionalProps>;
export default BruNfcDirectional;
