import React from 'react';

export interface LanHandHoldingBoxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandHoldingBox(props: LanHandHoldingBoxProps): React.ReactElement;
export default LanHandHoldingBox;
