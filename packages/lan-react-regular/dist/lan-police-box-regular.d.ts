import React from 'react';

export interface LanPoliceBoxRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPoliceBoxRegular(props: LanPoliceBoxRegularProps): React.ReactElement;
export default LanPoliceBoxRegular;
