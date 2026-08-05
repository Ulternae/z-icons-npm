import React from 'react';

export interface LanSmokingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSmoking(props: LanSmokingProps): React.ReactElement;
export default LanSmoking;
