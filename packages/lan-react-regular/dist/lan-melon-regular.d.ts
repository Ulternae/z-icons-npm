import React from 'react';

export interface LanMelonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMelonRegular(props: LanMelonRegularProps): React.ReactElement;
export default LanMelonRegular;
