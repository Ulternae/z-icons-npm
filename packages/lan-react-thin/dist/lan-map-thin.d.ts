import React from 'react';

export interface LanMapThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapThin(props: LanMapThinProps): React.ReactElement;
export default LanMapThin;
