import React from 'react';

export interface LanHillRockslideSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHillRockslideSolid(props: LanHillRockslideSolidProps): React.ReactElement;
export default LanHillRockslideSolid;
