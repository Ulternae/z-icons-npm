import React from 'react';

export interface LanHandHoldingMagicSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandHoldingMagicSolid(props: LanHandHoldingMagicSolidProps): React.ReactElement;
export default LanHandHoldingMagicSolid;
