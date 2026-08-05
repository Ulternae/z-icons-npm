import React from 'react';

export interface LanBeeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBeeRegular(props: LanBeeRegularProps): React.ReactElement;
export default LanBeeRegular;
