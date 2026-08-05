import React from 'react';

export interface LanSquareVirusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareVirusRegular(props: LanSquareVirusRegularProps): React.ReactElement;
export default LanSquareVirusRegular;
