import React from 'react';

export interface LanStroopwafelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStroopwafelRegular(props: LanStroopwafelRegularProps): React.ReactElement;
export default LanStroopwafelRegular;
