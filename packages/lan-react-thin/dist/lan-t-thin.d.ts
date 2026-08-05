import React from 'react';

export interface LanTThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTThin(props: LanTThinProps): React.ReactElement;
export default LanTThin;
