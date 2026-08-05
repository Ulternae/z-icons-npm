import React from 'react';

export interface LanBaseballBatThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBaseballBatThin(props: LanBaseballBatThinProps): React.ReactElement;
export default LanBaseballBatThin;
