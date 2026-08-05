import React from 'react';

export interface LanSocksProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSocks(props: LanSocksProps): React.ReactElement;
export default LanSocks;
