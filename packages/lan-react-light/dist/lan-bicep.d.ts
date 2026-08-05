import React from 'react';

export interface LanBicepProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBicep(props: LanBicepProps): React.ReactElement;
export default LanBicep;
