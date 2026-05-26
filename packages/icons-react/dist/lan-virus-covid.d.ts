import React from 'react';

export interface LanVirusCovidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVirusCovid: React.FC<LanVirusCovidProps>;
export default LanVirusCovid;
