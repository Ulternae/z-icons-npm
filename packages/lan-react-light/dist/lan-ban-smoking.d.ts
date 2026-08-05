import React from 'react';

export interface LanBanSmokingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBanSmoking(props: LanBanSmokingProps): React.ReactElement;
export default LanBanSmoking;
