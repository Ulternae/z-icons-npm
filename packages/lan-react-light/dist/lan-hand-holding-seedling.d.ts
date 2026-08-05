import React from 'react';

export interface LanHandHoldingSeedlingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandHoldingSeedling(props: LanHandHoldingSeedlingProps): React.ReactElement;
export default LanHandHoldingSeedling;
