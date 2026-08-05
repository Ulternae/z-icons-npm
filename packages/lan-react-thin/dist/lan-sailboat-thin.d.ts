import React from 'react';

export interface LanSailboatThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSailboatThin(props: LanSailboatThinProps): React.ReactElement;
export default LanSailboatThin;
