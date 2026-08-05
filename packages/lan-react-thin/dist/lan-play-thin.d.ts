import React from 'react';

export interface LanPlayThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlayThin(props: LanPlayThinProps): React.ReactElement;
export default LanPlayThin;
