import React from 'react';

export interface LanVirusesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanViruses: React.FC<LanVirusesProps>;
export default LanViruses;
