import React from 'react';

export interface LanHillAvalancheRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHillAvalancheRegular(props: LanHillAvalancheRegularProps): React.ReactElement;
export default LanHillAvalancheRegular;
