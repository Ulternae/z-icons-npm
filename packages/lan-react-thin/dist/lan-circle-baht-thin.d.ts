import React from 'react';

export interface LanCircleBahtThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleBahtThin(props: LanCircleBahtThinProps): React.ReactElement;
export default LanCircleBahtThin;
