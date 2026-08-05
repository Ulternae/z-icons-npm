import React from 'react';

export interface LanShipThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShipThin(props: LanShipThinProps): React.ReactElement;
export default LanShipThin;
