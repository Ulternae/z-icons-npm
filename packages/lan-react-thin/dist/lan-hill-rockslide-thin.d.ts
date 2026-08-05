import React from 'react';

export interface LanHillRockslideThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHillRockslideThin(props: LanHillRockslideThinProps): React.ReactElement;
export default LanHillRockslideThin;
