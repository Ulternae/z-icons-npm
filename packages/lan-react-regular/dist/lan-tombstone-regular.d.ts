import React from 'react';

export interface LanTombstoneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTombstoneRegular(props: LanTombstoneRegularProps): React.ReactElement;
export default LanTombstoneRegular;
