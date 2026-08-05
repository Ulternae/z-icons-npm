import React from 'react';

export interface LanWatermelonSliceThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWatermelonSliceThin(props: LanWatermelonSliceThinProps): React.ReactElement;
export default LanWatermelonSliceThin;
