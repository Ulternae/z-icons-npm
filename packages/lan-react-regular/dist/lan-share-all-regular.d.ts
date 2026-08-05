import React from 'react';

export interface LanShareAllRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShareAllRegular(props: LanShareAllRegularProps): React.ReactElement;
export default LanShareAllRegular;
