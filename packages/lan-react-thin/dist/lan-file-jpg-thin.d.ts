import React from 'react';

export interface LanFileJpgThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileJpgThin(props: LanFileJpgThinProps): React.ReactElement;
export default LanFileJpgThin;
