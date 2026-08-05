import React from 'react';

export interface LanSquareBahtThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareBahtThin(props: LanSquareBahtThinProps): React.ReactElement;
export default LanSquareBahtThin;
