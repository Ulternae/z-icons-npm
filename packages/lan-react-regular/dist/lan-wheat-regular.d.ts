import React from 'react';

export interface LanWheatRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWheatRegular(props: LanWheatRegularProps): React.ReactElement;
export default LanWheatRegular;
