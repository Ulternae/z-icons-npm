import React from 'react';

export interface LanBringFrontThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBringFrontThin(props: LanBringFrontThinProps): React.ReactElement;
export default LanBringFrontThin;
