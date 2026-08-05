import React from 'react';

export interface LanHandHoldingBoxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandHoldingBoxSolid(props: LanHandHoldingBoxSolidProps): React.ReactElement;
export default LanHandHoldingBoxSolid;
