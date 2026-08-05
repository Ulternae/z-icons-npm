import React from 'react';

export interface LanVideoHandheldThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVideoHandheldThin(props: LanVideoHandheldThinProps): React.ReactElement;
export default LanVideoHandheldThin;
