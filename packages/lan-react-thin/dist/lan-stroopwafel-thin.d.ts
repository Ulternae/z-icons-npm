import React from 'react';

export interface LanStroopwafelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStroopwafelThin(props: LanStroopwafelThinProps): React.ReactElement;
export default LanStroopwafelThin;
