import React from 'react';

export interface LanDemocratProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDemocrat(props: LanDemocratProps): React.ReactElement;
export default LanDemocrat;
