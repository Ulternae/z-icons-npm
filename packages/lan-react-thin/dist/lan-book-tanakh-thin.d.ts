import React from 'react';

export interface LanBookTanakhThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookTanakhThin(props: LanBookTanakhThinProps): React.ReactElement;
export default LanBookTanakhThin;
