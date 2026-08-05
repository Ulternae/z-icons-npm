import React from 'react';

export interface LanWandMagicRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWandMagicRegular(props: LanWandMagicRegularProps): React.ReactElement;
export default LanWandMagicRegular;
