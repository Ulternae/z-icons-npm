import React from 'react';

export interface LanShipLargeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShipLargeThin(props: LanShipLargeThinProps): React.ReactElement;
export default LanShipLargeThin;
