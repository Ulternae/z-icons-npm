import React from 'react';

export interface NeoSuitcaseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSuitcase: React.FC<NeoSuitcaseProps>;
export default NeoSuitcase;
