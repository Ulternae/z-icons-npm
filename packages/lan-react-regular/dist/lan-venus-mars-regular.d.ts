import React from 'react';

export interface LanVenusMarsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVenusMarsRegular(props: LanVenusMarsRegularProps): React.ReactElement;
export default LanVenusMarsRegular;
