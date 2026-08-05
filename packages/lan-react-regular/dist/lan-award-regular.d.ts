import React from 'react';

export interface LanAwardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAwardRegular(props: LanAwardRegularProps): React.ReactElement;
export default LanAwardRegular;
