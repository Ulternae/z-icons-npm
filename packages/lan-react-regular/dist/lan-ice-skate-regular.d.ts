import React from 'react';

export interface LanIceSkateRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIceSkateRegular(props: LanIceSkateRegularProps): React.ReactElement;
export default LanIceSkateRegular;
