import React from 'react';

export interface LanMapMarkedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMapMarkedThin(props: LanMapMarkedThinProps): React.ReactElement;
export default LanMapMarkedThin;
