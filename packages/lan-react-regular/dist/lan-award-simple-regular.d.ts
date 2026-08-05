import React from 'react';

export interface LanAwardSimpleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAwardSimpleRegular(props: LanAwardSimpleRegularProps): React.ReactElement;
export default LanAwardSimpleRegular;
