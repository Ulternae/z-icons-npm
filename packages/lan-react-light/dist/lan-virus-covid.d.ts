import React from 'react';

export interface LanVirusCovidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVirusCovid(props: LanVirusCovidProps): React.ReactElement;
export default LanVirusCovid;
