import React from 'react';

export interface LanBatThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBatThin(props: LanBatThinProps): React.ReactElement;
export default LanBatThin;
