import React from 'react';

export interface LanStampThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStampThin(props: LanStampThinProps): React.ReactElement;
export default LanStampThin;
