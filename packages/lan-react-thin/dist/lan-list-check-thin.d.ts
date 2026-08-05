import React from 'react';

export interface LanListCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanListCheckThin(props: LanListCheckThinProps): React.ReactElement;
export default LanListCheckThin;
